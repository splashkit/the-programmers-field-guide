---
title: Use Your Raspberry Pi
sidebar:
  attrs:
    class: pi
---

Inside the [Raspberry Pi](/book/part-0-getting-started/2-computer-use/0-panorama/05-raspberry-pi), it has a CPU (the brain), RAM (its short-term memory), and various ports like HDMI and USB.

But the real magic happens with its GPIO pins!

## Understanding the GPIO Pins

![Raspberry Pi 40-pin header](https://www.raspberrypi.com/documentation/computers/images/GPIO-Pinout-Diagram-2.png)
<div class="caption">Image © Raspberry Pi Ltd, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International</a> (CC BY-SA)</div>

The **General Purpose Input/Output (GPIO)** pins give you a physical interface between your Raspberry Pi and external hardware components. Here’s how you can use them:

- **Input Mode:**  
  You can attach sensors (temperature and light sensors) or other input devices such as a joystick, to the pins to allow the Raspberry Pi to read signals from these sensors to understand its environment, or control a player in a game.

- **Output Mode:**  
  Connect LEDs, motors, buzzers, and more! With a bit of code, you can make an LED blink, a motor spin, or even create sound effects.

- **Digital and PWM Signals:**  
  Some pins work in a digital on/off mode (perfect for simple tasks), while others support Pulse Width Modulation (PWM), which lets you control the speed of a motor or the brightness of an LED by varying the power output.

With the GPIO pins as your bridge between software and hardware, you can build exciting programs that respond to real-world events!

<!-- Note: The line below is left out for now, but can be added back in eventually once motors and more sensors have been included in activities. -->
<!-- By the end of this book, you could even build a robot that can navigate and react to its surroundings, using motors and sensors. -->

:::note[Getting Started: Set up Your Raspberry Pi]

Before you start exploring the Raspberry Pi activities in this book, you will need to get your Raspberry Pi up and running. We have step-by-step guides for this:

- [Set up my Raspberry Pi](/book/appendix/0-installation/2-3-setup-pi/)

  This page includes instructions for setting up the Raspberry Pi OS (including downloading the OS, installing it on your microSD card, and initial configuration) as well as installing the software tools you will need.

  *You can skip to [3. Set up Raspberry Pi OS](/book/appendix/0-installation/2-3-setup-pi/#3-setup-raspberry-pi-os) if you have already done the initial OS installation.*

- [Build my Raspberry Pi](/book/appendix/0-installation/2-2-pi-computer)
  
  This page includes information about the Raspberry Pi hardware as well as optional instructions to help you build a small portable setup.

:::

:::tip

*Take your time during setup* and don’t be afraid to explore! Every step (or misstep) is a learning opportunity that will build up your skills and understanding.

:::
