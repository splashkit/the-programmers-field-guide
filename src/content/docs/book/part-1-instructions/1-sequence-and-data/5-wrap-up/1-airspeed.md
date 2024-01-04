---
title:  Airspeed Velocity
---

Here is our version of the Airspeed velocity program code. When building your own version of this program, you can use this if you get stuck. Remember that your code may be a little different to this, and that is ok. The most important thing is that you create your own version, have a good understanding of how it works, and have developed the knowledge and skills necessary to create similar programs using variable and constant declarations, assignment statements, method calls, and an iterative process.

```csharp
using static System.Console;
using static System.Convert;

const double STROUHAL_LOW_EFFICIENCY = 0.4;
const double STROUHAL_HIGH_EFFICIENCY = 0.2;

string birdName, line;
double freq, amp;

// Display program details
WriteLine("Welcome to the Airspeed Calculator");
WriteLine();

// Read in the name, frequency and amplitude
WriteLine("What is the name of the bird?");
Write("Name: ");
birdName = ReadLine();

WriteLine("What is the frequency of its wing stroke? (beats per second)");
Write("Frequency: ");

// Read and convert frequency to double
line = ReadLine();
freq = ToDouble(line);

WriteLine("What is the amplitude of its wings? (centi)");
Write("Amplitude: :");
line = ReadLine();
amp = ToDouble(line);

// calculate the airspeed, given a fixed Strouhal value
double resultMax, resultMin;
resultMax = freq * amp / STROUHAL_HIGH_EFFICIENCY;
resultMin = freq * amp / STROUHAL_LOW_EFFICIENCY;

// output the airspeed of the bird
WriteLine($"Bird {birdName} ");
WriteLine($" - f: {freq} A: {amp} Speed: {resultMax} m/s");
WriteLine($" - f: {freq} A: {amp} Speed: {resultMin} m/s");

```
