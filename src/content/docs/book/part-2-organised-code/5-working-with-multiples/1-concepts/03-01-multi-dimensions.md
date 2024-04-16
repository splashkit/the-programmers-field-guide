---
title: Arrays of Arrays
---

So far we have been working with what we would call **single dimensional arrays**. This refers to the fact that we have an array with a single index. When we picture this, it is a list of values - giving us a single dimension.

In some cases, you may want to represent **multidimensional** data where you do not want to think about it as a list of values. For example, you may picture the data as a grid of values, like a spreadsheet, such as data by month and year. In this case you need to know both the year and month to access an individual value.

The following table illustrates a two-dimensional array. In one dimension we have a list of years, in the other a list of months. We can pick a single year, and then we have a list of month values. For example, 2023 has 27.0, 26.9, 24.6, and 21.1 for that year's month values. Alternatively, we can also pick a month, and then we have a list of year values. For example, February has the values 26.9, 25.9, and 26.6. But to access an individual value you need to provide both the year and month. So 2022 April has the value 20.3, 2023 January has 27.0, and so on.

| Year  | Jan (idx 0)  | Feb (idx 1)  | Mar (idx 2)  | Apr (idx 3)  | ... |
|-----------|------|------|------|------|-----|
| **2023** (idx 0) | 27.0 | 26.9 | 24.6 | 21.1 | ... |
| **2022** (idx 1) | 25.9 | 25.9 | 23.9 | 20.3 | ... |
| **2021** (idx 2) | 26.3 | 26.6 | 24.4 | 21.0 | ... |

We can map these data structures to arrays within the computer.

## Single Dimensional Arrays

The arrays we have looked at so far have been single dimensional arrays. These are declared by providing the size of the array in square brackets. For example, the following declaration creates an array with 3 values in it. These are accessed using indexes 0, 1, and 2.

```cpp
const int YEARS = 3;
int data[YEARS];
```

When we picture this, we can see a list of three values each with its own index.

## Two Dimensional Arrays

A two-dimensional array requires two indexes. In C/C++ you can follow an array declaration with a second index in square brackets. For example, the following code creates a two-dimensional array that has 3 values each of which contains 12 values. In these situations you would also have a meaning to each dimension, so it is easier to think of this as 3 years, each of which contains 12 months.

```cpp
const int YEARS = 3;
const int MONTHS = 12;
int data[YEARS][MONTHS];
```

When we picture this we have a grid of values. The grid has 3 years, each with 12 months giving us thirty-six individual values. To access an individual value you need to provide two indexes. So the first value would be `data[0][0]` and the last would be `data[2][11]`.

### Looping over a single dimension

You can go through the months in a year using, for example, `data[1][0]`, `data[1][1]`, `data[1][2]`, up to `data[1][11]`. Here we are accessing all the month values for the 2nd year (the one at index 1). The following code snippet uses this idea with a for loop to calculate the sum of month values for the year.

```cpp
double yearTotal = 0;
int year = 1;
for(int m = 0; m < MONTHS; m++)
{
  yearTotal += data[year][m];
}
```

Notice that the year remains fixed, and the loop iterates through the different month options. This is the same idea we had when working with a single dimensional array, as we are looping through a single dimension of this two-dimensional array.

You can loop through any single dimension using the same logic. You can go through the years for a particular month using a fixed month value, for example we can fix to the 7th month (at index 6) using `data[0][6]`, `data[1][6]`, and `data[2][6]`. The following for loop demonstrates this to sum the values for a particular month across the different years.

```cpp
double monthTotal = 0;
int month = 6;

for(int y = 0; y < YEARS; y++)
{
  monthTotal += data[y][month];    
}
```

Notice how the month remains set here, with the loop giving us access to each year index.

### Looping over both dimensions

If you want to access all values, then you need to use **nested loops**. A nested loop refers to a loop that appears within another loop. In this way, the inner loop is repeated multiple times, going through all of its iterations each time the outer loop repeats.

The following code sums all values in the array. It achieves this by looping over each year, and nesting the month loop within the year loop.

```cpp
double total = 0;
// For each year
for(int y = 0; y < YEARS; y++)
{
  // We are now in year "y"
  // So access all of this year's months
  for(int m = 0; m < MONTHS; m++)
  {
    // We are in year "y" (outer loop)
    // and now we are in month "m" (inner loop)
    // We have the two indexes we need.
    total += data[y][m];
  }
}
```

This is where thinking in blocks can really help. Outside the loops we have the two-dimensional array of data we want to work through. The first for loop will loop over each year, so the block inside this loop has a fixed year - the "y" year. If you focus your attention inside the year loop you have a single year, so you can loop over the months. Inside that loop, you have a given year (y index) and a given month (m index) so you can access an individual value from the two-dimensional array.

While we did this with the year first, there is nothing that says it has to be that way around. We could loop by months, and then for each month loop over the years. It would all depend on what you want to achieve. The following code achieves the same as the above, but selects a month first and then progresses through all of that month's year data.

```cpp
double total = 0;
// For each month
for(int m = 0; m < MONTHS; m++)
{
  // We are now in month "m"
  // So access all of this month's years
  for(int y = 0; y < YEARS; y++)
  {
    // We are in month "m" (outer loop)
    // and now we are in year "y" (inner loop)
    // We have the two indexes we need.
    total += data[y][m];
  }
}
```

*Why would you loop one way or the other?*

Well it depends on what you want to achieve. For the total, either order will achieve the same thing. However, if you want yearly or month averages then you need to loop in a particular order. To get each year and its monthly average, you need to loop over the year first. If you want each month and that months average across the years measured, then you loop the months first and then the years within each month. The code for both of these options is shown below.

```cpp
// For each year - print year totals and averages
for(int y = 0; y < YEARS; y++)
{
  // calculate the year total for year "y"
  double year_total = 0;
  for(int m = 0; m < MONTHS; m++)
  {
    year_total += data[y][m];
  }

  printf("Year %d, total: %lf, monthly average: %lf\n", y, year_total, year_total / MONTHS);
}

// For each month - print the month totals and averages
for(int m = 0; m < MONTHS; m++)
{
  // Calculate total for month "m"
  double month_total = 0;
  for(int y = 0; y < YEARS; y++)
  {
    month_total += data[y][m];
  }

  printf("Month %d, total: %lf, yearly average: %lf\n", m, month_total, month_total / YEARS);
}
```

The key thing with this processing is to see how each for loop allows you to process each dimension in the array. The array requires you to indicate two indexes to access each element, therefore this requires two loops if you want to process all elements.

## Multi Dimensional Arrays

*Is there more than 1 and 2-dimensional arrays?*

Yes, you can have as many dimensions as you need to reflect your data. With each dimension, you can add an index to track the different index values for that dimension. You can have 1, 3, 10, 15, 20, as many dimensions as you need.

The number of elements you create can be calculated by multiplying the size of each dimension. So a 3-dimensional array of 4 years, 12 months, and 3 locations would have 4 x 12 x 3 = 144 individual elements. Each element would represent a single year, month, and location.

As with two-dimensional arrays, you need to have multiple for loops if you want to process all elements in your array. For our 3-dimensional array you need three for loops. For example, one to loop over the years, that contains one that loops over the locations, that contains one to loop over the months.

## This all seems challenging

The key here is to remember that you only need multidimensional arrays when you have a multidimensional problem. Then the arrays become a convenient way of capturing and processing that data with ease. In these cases, you will know what the different dimensions need to be and you if you remember to have a loop per dimension, then you can use these multiple loops to iterate over all the elements in the array as you need.

There are other ways you could capture this kind of information as well. With our 3-dimensional version we had years, months, and locations. Rather than a 3-dimensional array, you could construct this as a series of related structs. Perhaps it could have the location at the root, this could capture details like the name and coordinates of the location as well as a 2-dimensional array of years and months. Alternatively, the location could have an array of years each with the date and an array of months.

When you are modelling data, the key is always to make it clear and simple. You need to think about how the data will be processed, and design the data to make it easy for you to craft the instructions to get the output you need.
