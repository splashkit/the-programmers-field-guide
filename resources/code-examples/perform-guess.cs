/*
* This program is an implementation of the "guess that number"
* game. The computer randomly chooses a number and the player
* attempts to guess it. (It should never take more than 7 guesses)
*/

using static System.Convert;
using static SplashKitSDK.SplashKit;

const int MAX_NUMBER = 100;
const int MAX_GUESSES = 7;
string line;

// Loops the guessing game until the user decided to quit.
do
{
  // Determine the target, loop until too many/got it, output result
  int target, numGuess;
  bool gotIt;
  
  target = Rnd(MAX_NUMBER) + 1; // Generate random value 1 to MAX_NUMBER
  numGuess = 0; //Keep track of the number of guesses
  
  WriteLine($"I am thinking of a number between 1 and {MAX_NUMBER}");
  
  do
  {
    // A single guess - and its message
    int guess;

    numGuess++;
  
    Write($"Guess {numGuess}: ");
    line = ReadLine();
    guess = ToInt32(line);    
    
    if (target < guess)
    {
      WriteLine($"The number is less than {guess}");
    }
    else if (target > guess)
    {
      WriteLine($"The number is larger than {guess}");
    }
    else
    {
      WriteLine($"Well done... the number was {guess}");
    }
    
    gotIt = target == guess;
  } while (numGuess < MAX_GUESSES && !gotIt);
  
  if (!gotIt)
  {
    WriteLine($"You ran out of guesses... the number was {target}");
  }
  
  WriteLine("");
  Write("Do you want to play again [y/N]? ");
  line = ReadLine();
} while (line == "y" || line == "Y");
