#include <stdio.h>

int main(void) {
  char first_name[] = "John";
  char last_name[] = "Smith";
  char full_name[50];

  // copy the first name into the full name
  int i = 0;
  while (first_name[i] != '\0') {
    full_name[i] = first_name[i];
    i++;
  }
  full_name[i++] = ' ';

  int j = 0;
  while (last_name[j] != '\0') {
    full_name[j + i] = last_name[j];
    j++;
  }
  full_name[j+i] = '\0';

  printf("%s\n", full_name);

  return 0;
}