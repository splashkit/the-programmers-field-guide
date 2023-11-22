---
title: Characters - the char data type
sidebar:
    label: " - Characters"
---

In C/C++, characters are represented by the `char` data type. A `char` is just an 8-bit integer (a single byte) used to represent a single character. Something like `01001010`.

`01001010` is a binary number. It's made up of 8 bits, each of which can be either a `1` or a `0`. To arrive at the decimal integer value it is storing, we start at the right-hand side and work our way left, doubling the value of each bit as we go. If the bit is a `1`, we add the value to our total. If the bit is a `0`, we don't add anything. Let's take a look at the above binary number:

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 0   | 0   | 1   | 0   | 1   | 0   |

So, to arrive at the decimal value of the above binary number, add columns 2, 8, 64 together to arrive at 74. Now we need a way of turning these numbers into characters. This is achieved by mapping each value to a character. In this way, we can construct text from binary values.

So how does this mapping occur? There many ways that we could map numbers to characters, and as a result there are different standards such as [UTF-8](https://en.wikipedia.org/wiki/UTF-8) and [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters). UTF-8 is becoming the main coding standard for things like webpages, and it builds upon the earlier [ASCII](https://en.wikipedia.org/wiki/ASCII) mapping. To understand how this works, we can look at the details of the ASCII standard, and how it works to create characters.

## The ASCII Format

ASCII, standing for American Standard Code for Information Interchange, is a character encoding standard for electronic communication. You can represent this mapping as a table, showing which character each numeric value maps to.

The ASCII table is a standardised lookup table that maps integers to charactersm and is used by all modern computers. It's is a great example of a low-level programming construct as it's a simple, efficient way to map integers to characters. Let's take a look and see what our binary sequence `01001010` maps to:

```
Dec Chr     Dec Chr     Dec Chr     Dec Chr     Dec  Chr
--------------------------------------------------------
0   NUL     26  SUB     52  4       78   N      104  h
1   SOH     27  ESC     53  5       79   O      105  i
2   STX     28  FS      54  6       80   P      106  j
3   ETX     29  GS      55  7       81   Q      107  k
4   EOT     30  RS      56  8       82   R      108  l
5   ENQ     31  US      57  9       83   S      109  m
6   ACK     32  SPACE   58  :       84   T      110  n
7   BEL     33  !       59  ;       85   U      111  o
8   BS      34  "       60  <       86   V      112  p
9   HT      35  #       61  =       87   W      113  q
10  LF      36  $       62  >       88   X      114  r
11  VT      37  %       63  ?       89   Y      115  s
12  FF      38  &       64  @       90   Z      116  t
13  CR      39  '       65  A       91   [      117  u
14  SO      40  (       66  B       92   \      118  v
15  SI      41  )       67  C       93   ]      119  w
16  DLE     42  *       68  D       94   ^      120  x
17  DC1     43  +       69  E       95   _      121  y
18  DC2     44  ,       70  F       96   `      122  z
19  DC3     45  -       71  G       97   a      123  {
20  DC4     46  .       72  H       98   b      124  |
21  NAK     47  /       73  I       99   c      125  }
22  SYN     48  0       74  J       100  d      126  ~
23  ETB     49  1       75  K       101  e      127  DEL
24  CAN     50  2       76  L       102  f          
25  EM      51  3       77  M       103  g          
```
 
So we consult our ASCI table, and find that 74 maps to the character `J`! So, the binary number `01001010` is the integer `74`, which is the character `J`! We now have a simple, reproducible method to go from `0`s and `1`s in memory, to characters!

:::note

Not all characters are actually rendered (drawn) on the screen! White-space characters such as spaces, tabs, and newlines are all characters, but they are only used to format text. For example, look at the character `32` in the ASCII table, it is a space! This is why we can have a string like `"Hello, world!"` and the computer knows to print a space between the comma and the `w`!

:::

Now that we know how to store a single character in memory, let's take a look at how we can store an array of characters (a string) in memory.
