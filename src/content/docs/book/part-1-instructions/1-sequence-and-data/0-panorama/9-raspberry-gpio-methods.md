---
title: GPIO methods to use
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

// Write data (0 or 1) to the Raspberry Pi GPIO pin
public static void RaspiWrite(GpioPin pin, GpioPinValue value);

// Reset the GPIO system before exiting the program
public static void RaspiCleanup();

// Delay - waiting for a number of milliseconds before continuing
public static void Delay(int milliseconds);
```

*What do the different arguments represent?*

When you interact with the GPIO pins on your Raspberry Pi, it first needs to know which GPIO pin is being used, and how. This is done using the `RaspiSetMode` method. The `pin` argument determines which GPIO pin to set up, and the `mode` argument determines how it will be used, such as using `GpioPinMode.GpioOutput` to write data to a GPIO pin.

The `RaspiWrite` method allows you to write data to a given GPIO pin, using the `pin` argument. The data written to the pin is determined by the `value` argument, which could be `GpioPinValue.GpioLow` (0), or `GpioPinValue.GpioHigh` (1).

## Example

The following example blinks an LED connected to Pin 36 (GPIO16) three times.

```cs
using SplashKitSDK;
using static SplashKitSDK.SplashKit;

// Initialise the GPIO system
RaspiInit();

// Define the LED pin (using physical Pin 36)
GpioPin ledPin = GpioPin.Pin36;

// Set the LED pin to output mode
RaspiSetMode(ledPin, GpioPinMode.GpioOutput);

// Blink 1: Turn LED ON, wait, then OFF
RaspiWrite(ledPin, GpioPinValue.GpioHigh);
Delay(500);  // LED ON for 500 ms
RaspiWrite(ledPin, GpioPinValue.GpioLow);
Delay(500);  // LED OFF for 500 ms

// Blink 2: Turn LED ON, wait, then OFF
RaspiWrite(ledPin, GpioPinValue.GpioHigh);
Delay(500);
RaspiWrite(ledPin, GpioPinValue.GpioLow);
Delay(500);

// Blink 3: Turn LED ON, wait, then OFF
RaspiWrite(ledPin, GpioPinValue.GpioHigh);
Delay(500);
RaspiWrite(ledPin, GpioPinValue.GpioLow);
Delay(500);

// Clean up the GPIO system
RaspiCleanup();
```
