#include "splashkit.h"
#include <string>

enum States
{
    CONTROL_LEFT,
    CONTROL_RIGHT,
    CONTROL_BOTH,
    CONTROL_NONE
} struct Vehicle
{
    motor_device left_motor;
    motor_device right_motor;
    gpio_pin button;
    adc_device pot;
    States state;
} void toggle_state(States *state)
{
    switch (state)
    {
    case CONTROL_LEFT:
        state = CONTROL_BOTH;
        break;
    case CONTROL_RIGHT:
        state = CONTROL_BOTH;
        break;
    case CONTROL_BOTH:
        state = CONTROL_NONE;
        break;
    case CONTROL_NONE:
        state = CONTROL_LEFT;
        break;
    default:
        state = CONTROL_NONE;
        break;
    }
}

// 2) pass-by-value: convert raw ADC to float speed
float raw_to_speed(int raw)
{
    return raw / 255.0f;
}

// 3) pass-by-reference: adjust speed in place
void adjust_speed(float &spd, bool increase)
{
    const float STEP = 0.1f;
    if (increase)
        spd += STEP;
    else
        spd -= STEP;
    if (spd < 0.0f)
        spd = 0.0f;
    if (spd > 1.0f)
        spd = 1.0f;
}

void update_vechicle(Vehicle &vehicle)
{
    int raw = read_adc(vehicle.pot, ADC_PIN_0);
    float spd = raw_to_speed(raw);
    switch (vehicle.state)
    {
    case CONTROL_LEFT:
        set_motor_speed(vehicle.left_motor, spd);
        break;
    case CONTROL_RIGHT:
        set_motor_speed(vehicle.right_motor, spd);
        break;
    case CONTROL_BOTH:
        set_motor_speed(vehicle.left_motor, spd);
        set_motor_speed(vehicle.right_motor, spd);
        break;
    case CONTROL_NONE:
        stop_motor(vehicle.left_motor);
        stop_motor(vehicle.right_motor);
        break;
    }
}

int main()
{
    write_line("=== Motor Speed Logger ===");

    // Initialize GPIO
    raspi_init();

    // Open ADC and motor (L298N on IN1=PIN_24, IN2=PIN_23, ENA=PIN_25)
    adc_device pot = open_adc("pot", ADS7830);

    motor_device mtrA = open_motor("mtr", L298N, PIN_24, PIN_23, PIN_25);
    motor_device mtrB = open_motor("mtr", L298N, PIN_22, PIN_21, PIN_20);

    Vehicle vehicle;
    vehicle.left_motor = mtrA;
    vehicle.right_motor = mtrB;
    vehicle.pot = pot;
    vehicle.state = CONTROL_NONE;

    // --- Cleanup ---
    close_adc(pot);
    stop_motor(mtr);
    close_motor(mtr);
    raspi_cleanup();
    return 0;
}
