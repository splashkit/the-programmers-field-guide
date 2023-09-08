using static System.Console;
using static System.Convert;

int dividend, divisor;
int quotient;

dividend = 17;
divisor = 4;

quotient = dividend / divisor;

WriteLine($"{dividend} / {divisor} = {quotient}");


using static System.Console;
using static System.Convert;

int dividend, divisor;
double quotient;

dividend = 17;
divisor = 4;

quotient = dividend / (divisor * 1.0);

WriteLine($"{dividend} / {divisor} = {realQuotient}");

