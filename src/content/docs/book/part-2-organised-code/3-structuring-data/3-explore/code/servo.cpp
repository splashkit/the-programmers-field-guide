#include "splashkit.h"
#include <string>

// 1) Define an enum for the three preset servo angles
enum ServoPosition { Zero, Ninety, OneEighty };

// 2) Define a struct to hold one mapping record
struct Mapping {
    ServoPosition pos;  // which preset (or nearest) angle
    int raw_adc;        // raw reading from the ADC (0–255)
    int angle;          // converted angle (0–180)
};

// Helper: pick the closest enum for a measured angle
ServoPosition nearest_position(int angle)
{
    if (angle < 45)   return Zero;
    if (angle < 135)  return Ninety;
    return OneEighty;
}

// Helper: print an enum as text
std::string pos_to_string(ServoPosition p)
{
    switch (p) {
        case Zero:      return "Zero";
        case Ninety:    return "Ninety";
        default:        return "OneEighty";
    }
}

int main()
{
    // --- Setup ---
    raspi_init();
    open_window("Pot ↔ Servo Explorer", 1, 1);

    adc_device   pot   = open_adc("pot",   ADS7830);
    servo_device servo = open_servo("servo", PIN_12);

    Mapping mappings1, mappings2, mappings3;  // 3 pot→servo readings

    // --- Phase 1: Pot → Servo ---
    write_line("Turn pot & press Enter for reading 1.");
    read_line();
    {
        int raw   = read_adc(pot, ADC_PIN_0);
        int angle = raw * 180 / 255;
        set_servo_angle(servo, float(angle));
        mappings1 = { nearest_position(angle), raw, angle };
    }

    write_line("Turn pot & press Enter for reading 2.");
    read_line();
    {
        int raw   = read_adc(pot, ADC_PIN_0);
        int angle = raw * 180 / 255;
        set_servo_angle(servo, float(angle));
        mappings2 = { nearest_position(angle), raw, angle };
    }

    write_line("Turn pot & press Enter for reading 3.");
    read_line();
    {
        int raw   = read_adc(pot, ADC_PIN_0);
        int angle = raw * 180 / 255;
        set_servo_angle(servo, float(angle));
        mappings3 = { nearest_position(angle), raw, angle };
    }

    // --- Report (manually unrolled, no loops) ---
    write_line("");
    write_line("Position   | Raw ADC | Angle");
    write_line(pos_to_string(mappings1.pos) + "    | " +
               std::to_string(mappings1.raw_adc) + "      | " +
               std::to_string(mappings1.angle));
    write_line(pos_to_string(mappings2.pos) + "    | " +
               std::to_string(mappings2.raw_adc) + "      | " +
               std::to_string(mappings2.angle));
    write_line(pos_to_string(mappings3.pos) + "    | " +
               std::to_string(mappings3.raw_adc) + "      | " +
               std::to_string(mappings3.angle));

    // --- Cleanup ---
    close_adc(pot);
    stop_servo(servo);
    close_all_servos();
    raspi_cleanup();
    return 0;
}
