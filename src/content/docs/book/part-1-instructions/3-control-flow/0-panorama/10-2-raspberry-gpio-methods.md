---
title: Raspberry methods to use
sidebar:
  attrs:
    class: pi
---

<!-- TODO: update / add ADC methods -->

The Raspberry GPIO methods we will need in this chapter include:

- Raspberry GPIO methods:
  <!-- TODO: Recap basic gpio methods needed -->

- ADC methods:
  <!-- TODO: Add adc methods needed -->

- Other methods:
  <!-- TODO: Add other methods needed -->

These methods have the following declarations:

<!-- TODO: Update -->

```cs
// Initialise the GPIO system
public static void RaspiInit();

// Set the Mode for a GPIO Pin on the Raspberry Pi
public static void RaspiSetMode(GpioPin pin, GpioPinMode mode);

// Set the Pull up/down mode for a pin to set it's default state (down = 0 and up = 1)
public static void RaspiSetPullUpDown(GpioPin pin, PullUpDown pud);

// Write data (0 or 1) to the Raspberry Pi GPIO pin
public static void RaspiWrite(GpioPin pin, GpioPinValue value);

// Read data (0 or 1) from the Raspberry Pi GPIO pin
public static GpioPinValue RaspiRead(GpioPin pin);

// Reset the GPIO system before exiting the program
public static void RaspiCleanup();

// Convert the "GpioPinValue" type to an integer
public static int ToInt(GpioPinValue value);

// Delay - waiting for a number of milliseconds before continuing
public static void Delay(int milliseconds);
```

## Example

The following example reads the potentiometer connected to the ADS7830 ADC, and uses this to change the alpha value of the "black screen" covering a red circle in a SplashKit window:

```cs
using SplashKitSDK;
using static SplashKitSDK.SplashKit;

// Initialise the GPIO system
RaspiInit();

// Define the button and LED pins
GpioPin buttonPin = GpioPin.Pin13;
GpioPin ledPin = GpioPin.Pin11;

// Set the button pin to input mode, and the led pin to output mode
RaspiSetMode(buttonPin, GpioPinMode.GpioInput);
RaspiSetMode(ledPin, GpioPinMode.GpioOutput);

// Set the button pin to use an internal pull-down resistor
RaspiSetPullUpDown(buttonPin, PullUpDown.PudDown);

// Button pressed
WriteLine("Press and hold your button down, then hit Enter to record the reading:");
ReadLine();  // Wait for user to press Enter
GpioPinValue reading1 = RaspiRead(buttonPin);

// Output result
WriteLine("Button Gpio value: " + reading1);
RaspiWrite(ledPin, reading1);

// Button released
WriteLine("Now release your button now so it is not pressed, then hit Enter:");
ReadLine();  // Wait for another press
GpioPinValue reading2 = RaspiRead(buttonPin);

// Output result
WriteLine("Button Gpio value: " + reading2);
RaspiWrite(ledPin, reading2);

// Clean up the GPIO system
RaspiCleanup();
```
