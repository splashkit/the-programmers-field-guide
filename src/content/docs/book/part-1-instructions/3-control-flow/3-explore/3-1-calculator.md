---
title: Simple Stats
sidebar:
    label: " - Simple Stats"
---

Build a simple statistics calculator. This will keep a running count and total, as well as the minimum and maximum, for values entered by the user. When a value is entered, the program can update and output the count, total, minimum, maximum, and average.

```txt
Welcome to the simple stats calculator:

Enter value: 10
Count: 1
Total: 10.0
Min: 10.0
Max: 10.0
Average: 10.0

Add another value: [y/n] y
Enter value: 30
Count: 2
Total: 40.0
Min: 10.0
Max: 30.0
Average: 20.0

Add another value: [y/n] y
Enter value: 5
Count: 3
Total: 45.0
Min: 5.0
Max: 30.0
Average: 15.0

Add another value: [y/n] y
Enter value: -45
Count: 4
Total: 0.0
Min: -45.0
Max: 30.0
Average: 0.0


Add another value: [y/n] y
Enter value: 25.5
Count: 5
Total: 25.5
Min: -45.0
Max: 30.0
Average: 5.1

Add another value: [y/n] n
I hope you got the information you are after!
```

:::caution
Make sure the calculations work with entry of any valid number (that can be stored in a double).
:::
