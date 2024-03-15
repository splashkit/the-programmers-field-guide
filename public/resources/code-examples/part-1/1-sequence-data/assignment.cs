using static System.Convert;
using static System.Console;

string line;
int count;

Write("What is the start count: ");

// Read in a line from the user
line = ReadLine();

// Initialise the count to a user provided value.
count = ToInt32(line);

WriteLine($"Count is {count}");

// Add one to count
//
// count is the left-hand side - where to store the value
// |
// |    count + 1 is calculated first...
// |      |
// v      v
count = count + 1;

WriteLine($"After count = count + 1... count is now {count}");

// We can use shorthand to do this too
//
// count is the left-hand side - where to store the value
// |
// |  This means... count = count + 5
// |  |
// v  v
count += 5;

WriteLine($"After count += 5... count is now {count}");

// We can make this shorter for + 1
//
// count is the left-hand side - where to store the value
// |
// | This means... count = count + 1
// | |
// v v
count++;

WriteLine($"After count++ 5... count is now {count}");