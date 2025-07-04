using static System.Console;
using static System.Convert;

const double STROUHAL_LOW_EFFICIENCY = 0.4;
const double STROUHAL_HIGH_EFFICIENCY = 0.2;

string birdName, line;
double freq, amp;

WriteLine("Welcome to the Airspeed Calculator");
WriteLine();
WriteLine("What is the name of the bird?");
Write("Name: ");
birdName = ReadLine();

WriteLine("What is the frequency of its wing stroke? (beats per second)");
Write("Frequency: ");

// Read and convert frequency to double
line = ReadLine();
freq = ToDouble(line);

WriteLine("What is the amplitude of its wings? (centimeters)");
Write("Amplitude: ");
line = ReadLine();
amp = ToDouble(line) / 100; // Convert to meters

// calculate the airspeed, given a fixed Strouhal value
double resultMax, resultMin;
resultMax = freq * amp / STROUHAL_HIGH_EFFICIENCY;
resultMin = freq * amp / STROUHAL_LOW_EFFICIENCY;

// output the airspeed of the bird
WriteLine();
WriteLine(birdName);
WriteLine($" - f: {freq} A: {amp} Speed: {resultMax:0.##}");
WriteLine($" - f: {freq} A: {amp} Speed: {resultMin:0.##}");
