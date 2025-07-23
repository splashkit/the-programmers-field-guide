---
title: Binary Converter
sidebar:
  attrs:
    class: pi
  label: " - Binary Converter"
---

For this task you can build on the ideas from the [Button Press Counter](/book/part-1-instructions/1-sequence-and-data/1-tour/03-00-button-press-counter) tour. You may also find it useful to read about [Raspberry Pi GPIO Pins](/book/part-1-instructions/1-sequence-and-data/0-panorama/8-gpio-pins) and [Raspberry methods to use](/book/part-1-instructions/1-sequence-and-data/0-panorama/9-raspberry-gpio-methods) for this task.

Build a program that will calculate the decimal value using binary inputs from 4 sequential button presses. The output should look similar to what is shown below.

```txt
Welcome to the 4-bit Binary to Decimal (Integer) Converter!

Press Enter to record the button reading for the Most Significant Bit: 

Button Reading 1: 1

Press Enter to record the button reading for the next Bit: 

Button Reading 2: 0

Press Enter to record the button reading for the next Bit: 

Button Reading 3: 1

Press Enter to record the button reading for the Least Significant Bit: 

Button Reading 4: 0

The binary value is: 1010
The converted decimal value is: 10
```

:::tip[Binary Addition Logic]

In binary, each digit has a **weight**. For a 4-digit binary number:

- **Most Significant Bit (MSB):** weight = **8** (2³)
- Next bit: weight = **4** (2²)
- Next bit: weight = **2** (2¹)
- **Least Significant Bit (LSB):** weight = **1** (2⁰)

To calculate the decimal value from the 4 binary values, you need to multiply the bit value by the corresponding weight, and then add them together.

<!-- TODO: Check if image is needed -->

![Image showing binary calculation for decimal value of 10](https://www.geeksforgeeks.org/wp-content/uploads/binary2decimal.png)
<div class="caption">Image from <a href="https://www.geeksforgeeks.org/dsa/program-binary-decimal-conversion/">GeeksForGeeks</a></div>

:::

:::note[How many Buttons?]

You will only need a single push button for this activity, just like with the [Button Press Counter](/book/part-1-instructions/1-sequence-and-data/1-tour/03-00-button-press-counter) activity.

You can try it with multiple buttons, but make sure you can build a program with a single button first.

:::

:::caution[Pigpio Daemon]

If you see an error message in your terminal similar to the following:

```shell
ERROR [default] Pigpio error: bad connect.
```

This means the Pigpio Daemon is not running. To start the `pigpiod` daemon, run the following command:

```shell
sudo pigpiod
```

:::

Enjoy building your 4-bit binary converter! Remember, take your time and build your solution gradually—step by step. Happy coding!
