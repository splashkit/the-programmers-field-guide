---
title: Raspberry Pi GPIO Pins
sidebar:
  attrs:
    class: pi
---

**G**eneral **P**urpose **I**nput/**O**utput pins let your Raspberry Pi sense or control simple electronic components. Each pin can be configured as an input (to read a signal) or an output (to send a signal).

SplashKit provides a variety of useful functionality and special data types to make it easier to work with the Raspberry Pi's GPIO pins.

## Working with GPIO Pins

### Pin Numbering

SplashKit's GpioPin data type refers to the physical header numbers, shown in the pinout diagram in [Understandingthe GPIO Pins](/book/part-0-getting-started/2-computer-use/1-tour/3-2-setup-raspberry#understanding-the-gpio-pins).

The [`GpioPin`](https://splashkit.io/api/types/#gpio-pin) table shows the code values for each pin on the left, and a description of the pin on the right. e.g. `GpioPin.Pin11` refers to "GPIO 17".

The interactive [Raspberry Pi Pinout](https://pinout.xyz/) page is a useful resource if you want to learn more about the different GPIO pins.

### Pin Modes

GPIO pins need their "mode" (input/output) configured before using them in your code. You can set the input/output mode of a GPIO Pin using SplashKit's [`RaspiSetMode`](https://splashkit.io/api/raspberry/#raspi-set-mode) method. The second argument given to this method will use the values shown in the first two rows of the [`GpioPinMode`](https://splashkit.io/api/types/#gpio-pin-mode) table (`GpioPinMode.GpioInput` and `GpioPinMode.GpioOutput`).

### Pull Resistors (Input Mode)

When configuring a GPIO pin for **digital *input*** devices such as a push button, the input signal can “float” if nothing is connected (such as when a button is not pressed), which will cause unexpected behaviour in your program. To prevent this issue, you can use SplashKit's [`RaspiSetPullUpDown`](https://splashkit.io/api/raspberry/#raspi-set-pull-up-down) method to enable an internal pull‑up (default high) or pull‑down (default low) resistor.

In the example below, the button pin has been configured to enable an internal pull‑down resistor using the `PullUpDown.PudDown` value from the [`PullUpDown`](https://splashkit.io/api/types/#pull-up-down) table.

### Pin Values

The GPIO pins use **digital** signals when writing to, or reading from, a GPIO pin. A digital signal is either low (0) or high (1). This connects with the [Machine Code](/book/part-0-getting-started/1-digital-realities/2-trailside/4-machine-code) ideas: the CPU ultimately deals in ones and zeroes, and GPIO lets you see and set those bits in the real world.

:::caution[Digital "high" signal voltage]

On the Raspberry Pi, a digital high signal is 3.3 volts.

*Never feed 5 volts into a GPIO pin!*

:::

:::tip[SplashKit's Pin Values]

When reading button inputs in the example below, the [`RaspiRead`](https://splashkit.io/api/raspberry/#raspi-read) method will return a [`GpioPinValue`](https://splashkit.io/api/types/#gpio-pin-value) of `GpioLow` (0) or `GpioHigh` (1).

To convert these values into raw binary values (0 or 1) to use in calculations, you can use SplashKit's [`ToInt`](https://splashkit.io/api/raspberry/#to-int) method.
:::

### The usual GPIO workflow

Once you have wired up your circuit and connected it to the relevant GPIO pins:

1. Start the pigpiod daemon in the shell if you have just rebooted.
2. In your code, call `RaspiInit` at the start.
3. Create `GpioPin` variables for each pin you want to use.
4. Set each pin’s mode (and pull for inputs)
5. Read or write as needed
6. Then call `RaspiCleanup` before the program exits.

## GPIO "pre‑flight checklist"

### 1. Hardware and wiring

- Power to the Pi is off while you wire components (or just connect the voltage pin last).
- LED polarity is correct: long leg to GPIO via resistor, short leg to Ground (GND).
- A current‑limiting resistor (≈220–330 Ω) is in series with any LEDs.
- Buttons are wired between the chosen GPIO pin and 3.3 V or GND (match this to your pull‑up or pull‑down choice).
- Ground connection is solid (all components share a GND with the Pi).
- No 5V wire is touching a GPIO pin (GPIOs are 3.3 V tolerant only).

### 2. Pin choices and naming

- You know which physical header pins you are using (for example `GpioPin.Pin11`).
- You are not mixing physical pin numbers with Broadcom (BCM) numbers.

### 3. System services

- `pigpiod` is running (start it after a reboot):  

  ```shell
  sudo pigpiod

## Example

To get started with using the Raspberry functions to write and read GPIO pin values, you can use the following wiring diagram to connect an LED to Pin 11 and connect a button to Pin 13.

:::note
You can check out [Step 2 - Initialise GPIO Pin](/book/part-1-instructions/1-sequence-and-data/1-tour/03-01-prepare-gpio-pins) from the guided activity for more information about setting up the button.
:::

![Image showing wiring diagram using an LED and a button](./images/read-button-circuit.png)
<div class="caption">Image created with <a href="https://fritzing.org/">Fritzing</a></div>

The following program uses methods in the [Raspberry](https://splashkit.io/api/raspberry/) category of the SplashKit library to "write" data to Pin 11 (GPIO 17), and "read" data from Pin 13 (GPIO 27) on the Raspberry Pi (as shown in the wiring diagram above).

```cs
using SplashKitSDK;
using static SplashKitSDK.SplashKit;

// Initialise the GPIO system
RaspiInit();

// Define the LED pin (using physical Pin 11)
GpioPin ledPin = GpioPin.Pin11;
// Define the button pin (using physical Pin 13)
GpioPin buttonPin = GpioPin.Pin13;

// Set the button pin to input mode
RaspiSetMode(buttonPin, GpioPinMode.GpioInput);
// Set the led pin to output mode
RaspiSetMode(ledPin, GpioPinMode.GpioOutput);

// Set the button pin to use an internal pull-down resistor
RaspiSetPullUpDown(buttonPin, PullUpDown.PudDown);

// Reading 1 with button pressed
WriteLine("Press and hold your button down, then hit Enter to record the reading:");
ReadLine();  // Wait for user to press Enter
GpioPinValue reading1 = RaspiRead(buttonPin);

// Output of button being pressed
WriteLine("Button Gpio value: " + reading1);
RaspiWrite(ledPin, reading1);

// Reading 2 with button released
WriteLine("Now release your button now so it is not pressed, then hit Enter:");
ReadLine();  // Wait for another press
GpioPinValue reading2 = RaspiRead(buttonPin);

// Output of button not being pressed
WriteLine("Button Gpio value: " + reading2);
RaspiWrite(ledPin, reading2);

// Clean up the GPIO system
RaspiCleanup();
```

## Activities

Here are some lines from the code above. What do you think these lines of code do?

1. `GpioPin ledPin = GpioPin.Pin11;`
2. `RaspiSetMode(ledPin, GpioPinMode.GpioOutput);`
3. `GpioPinValue reading1 = RaspiRead(buttonPin);`
4. `RaspiWrite(ledPin, reading1);`

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong><code>GpioPin ledPin = GpioPin.Pin11;</code> creates a GpioPin variable named ledPin, and assigns it the value of pin 11.</li>
    <li><strong>2: </strong><code>RaspiSetMode(ledPin, GpioPinMode.GpioOutput);</code> sets the LED pin to output mode to allow data to be written to pin 11.</li>
    <li><strong>3: </strong><code>GpioPinValue reading1 = RaspiRead(buttonPin);</code> reads the value of the pin 13, while the button is pushed, and assigns it to a GpioPinValue variable named "reading1".</li>
    <li><strong>4: </strong><code>RaspiWrite(ledPin, reading1);</code> turns the LED "on" by writing the value stored in the "reading1" variable (GpioHigh) to pin 11, which is connected to the LED.</li>
  </ul>
</details>
