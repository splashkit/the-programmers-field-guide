---
title: Raspberry methods to use
sidebar:
  attrs:
    class: pi
---

Interacting with the GPIO pins on a Raspberry Pi can be a fun way to explore how software and hardware interact. The following methods will give you a start building programs using your Raspberry Pi.

To create programs that use the GPIO pins on your Raspberry Pi, you will need the following using directives:

```cs
using SplashKitSDK;
using static SplashkitSDK.SplashKit;
```

The `using SplashKitSDK;` line allows you to create variables for your GPIO pins using SplashKit's [`GpioPin`](https://splashkit.io/api/types/#gpio-pin) data type.

With the `using static SplashkitSDK.SplashKit;` line, you have access to the following methods to interact with the Raspberry Pi GPIO Pins:

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

// Delay - waiting for a number of milliseconds before continuing
public static void Delay(int milliseconds);
```

*What do the different arguments represent?*

When you interact with the GPIO pins on your Raspberry Pi, it first needs to know which GPIO pin is being used, and how. This is done using the `RaspiSetMode` method. The `pin` argument determines which GPIO pin to set up, and the `mode` argument determines how it will be used, such as using `GpioPinMode.GpioOutput` to write data to a GPIO pin, or `GpioPinMode.GpioInput` to read data from a GPIO pin.

The `RaspiWrite` method allows you to write data to a given GPIO pin, using the `pin` argument. The data written to the pin is determined by the `value` argument, which could be `GpioPinValue.GpioLow` (0), or `GpioPinValue.GpioHigh` (1).

The `RaspiRead` method allows you to read data from a given GPIO pin, using the `pin` argument. The data read from the pin, which could be `GpioPinValue.GpioLow` (0), or `GpioPinValue.GpioHigh` (1), is returned when the method is called.

## Example

The following example reads whether the button connected to Pin 11 was pressed, and then turns the LED connected to Pin 13 "ON" if the button was pressed, and "OFF" if not pressed.

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
