/* stats-calc.c */

#include <stdio.h>

const int MAX_NUMBERS = 20;

/**
 * The data structure to store the numbers
 *
 * @field values the array of values
 * @field count the number of values in the array - up to MAX_NUMBERS
 */
typedef struct
{
  double values[MAX_NUMBERS];
  int count;
} number_data;

/**
 * Read an integer from the user
 *
 * @param prompt the message to show the user
 * @returns the integer entered
 */
int read_integer(const char *prompt)
{
  int result = 0;

  printf("%s", prompt);
  while (scanf(" %d", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt);
  }

  return result;
}

/**
 * Read a double value from the user
 *
 * @param prompt the message to show the user
 * @returns the double entered
 */
double read_double(const char *prompt)
{
  double result = 0;

  printf("%s", prompt);
  while (scanf(" %lf", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt);
  }

  return result;
}

/**
 * Populate the array with values entered by the user
 *
 * @param data the array of values
 */
void populate_array(number_data &data)
{
  int count = read_integer("How many values do you want to enter? ");
  if (count > MAX_NUMBERS)
  {
    printf("Sorry, you can only enter %d values.\n", MAX_NUMBERS);
    count = MAX_NUMBERS;
  }

  data.count = count;
  for (int i = 0; i < data.count; i++)
  {
    data.values[i] = read_double("Enter value: ");
  }
}

/**
 * Output the values in the array
 *
 * @param data the array of values
 */
void print(const number_data &data)
{
  for (int i = 0; i < data.count; i++)
  {
    printf("%d: %lf\n", i, data.values[i]);
  }
}

/**
 * Calculate the sum of the values in the array
 *
 * @param data the array of values
 * @return the sum of the values
 */
double sum(const number_data &data)
{
  int i;
  double result = 0;

  for (i = 0; i < data.count; i++)
  {
    result += data.values[i];
  }

  return result;
}

/**
 * Calculate the mean of the values in the array
 *
 * @param data the array of values
 * @returns the mean of the values
 */
double mean(const number_data &data)
{
  if (data.count > 0)
    return sum(data) / data.count;
  else
    return 0;
}

/**
 * Calculate the largest value in the array
 *
 * @param data the array of values
 * @returns the largest value, or 0 if there are no values
 */
double max(const number_data &data)
{
  // Ensure there is data
  if (data.count == 0)
    return 0;

  // Assume the first value is the largest
  double result = data.values[0];

  // Check the rest of the values
  for (int i = 1; i < data.count; i++)
  {
    if (data.values[i] > result)
    {
      result = data.values[i];
    }
  }

  return result;
}

/**
 * Add a value to the array
 *
 * @param data the array of values
 */
void add_data(number_data &data)
{
  double value = read_double("Enter a value to add: ");

  if (data.count < MAX_NUMBERS)
  {
    data.values[data.count] = value;
    data.count++;
  }
  else
  {
    printf("Sorry, you can only enter %d values.\n", MAX_NUMBERS);
  }
}

/**
 * Remove a value from the array
 *
 * @param data the array of values
 */
void remove_value(number_data &data)
{
  print(data);

  int index = read_integer("Enter the index of the value to remove: ");

  if (index >= 0 && index < data.count)
  {
    for (int i = index; i < data.count - 1; i++)
    {
      data.values[i] = data.values[i + 1];
    }
    data.count--;
  }
  else
  {
    printf("Sorry, that is not a valid index.\n");
  }
}

// Implements a statistics calculator. The program reads in values entered by the user
// and then calculates the sum, mean, variance, and max
int main()
{
  number_data data;

  populate_array(data);

  printf("\nCalculating statistics...\n\n");

  printf("Sum:        %4.2f\n", sum(data));
  printf("Mean:       %4.2f\n", mean(data));
  printf("Max:        %4.2f\n", max(data));

  add_data(data);

  print(data);

  remove_value(data);

  print(data);

  return 0;
}
