---
title: Bit shifting and masking
---

Bits are the building blocks of all data in a computer. They are the smallest unit of data, and are used to represent everything from numbers to text to images. In this chapter, we will explore how to manipulate bits in C/C++ using bit shifting, masking, and bitwise operations.

:::note
Do you know why computers are binary based? If not, it's worth looking into. It's a fascinating topic!
:::

## Bits

Let's remember how we represent data in binary.

In binary, we use the digits `0` and `1` to represent numbers. Each digit is called a *bit*. The value of a bit is determined by its position in the number. For example, the binary number `1011` can be expanded to:

|position| 8 | 4 | 2 | 1 |
|---|---|---|---|---|
|value| 1 | 0 | 1 | 1 |

So this binary number represents the decimal number `11` (8 + 2 + 1).

The bit manipulation we cover in this section just mean that we are interacting with data in its underlyting form, rather than its abstraction (where in the case of `1011` we would always think of the value as just being the integer `11`), we deal with the individual bits themselves.

### Why do we care about bits?

There are many reasons why we might want to manipulate bits directly. Here are a few:

- **Performance**: Sometimes, we can achieve better performance by manipulating bits directly. For example, we might be able to perform a calculation faster by using bitwise operations than by using arithmetic operations.
- **Memory**: Sometimes, we might want to store data in a more compact form. For example, we might want to store a set of boolean values in a single integer, rather than using an array of booleans.
- **Hardware**: Sometimes, we might need to interact with hardware that requires us to manipulate bits directly. For example, we might need to write a driver for a piece of hardware that requires us to set or clear specific bits in a register.

## Bit shifting

Bit shifting, is a common form of bit manipulation where we can move, or shift individual bits either left or right. If we think about it,in doing so, we can multiply or divide the number by powers of 2. Let's take a look at our example from earlier:


|position| 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|
|value| 0 | 1 | 0 | 1 | 1 |

Remember, this represents the decimal number `11`. If we shift the bits to the right by 1, we get:

|position| 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|
|value| 1 | 0 | 1 | 1 | 0 |

which would instead represent the decimal number `22`! We did all of this with only a single operation, and without having to perform any arithmetic, which is much faster for the CPU.

### Left shifting in C

In C, we can left shift a number using the `<<` operator. The `<<` operator takes two operands: the number to be shifted, and the number of bits to shift it by. For example, to left shift the number `11` by 1, we would write:

```c
#include <stdio.h>

int main()
{
  int number = 11;
  int shifted_number = number << 1;
  printf("The number %d left shifted by 1 is %d\n", number, shifted_number);

  return 0;
}
```

:::note
If left shifting in C is `<<`, can you guess what right shifting is?
:::

## Bit masking

Bit masking is another technique used to manipulate individual bits in a sequence. Rather than shifting bits left or right, we can use a mask to either set or clear specific bits in a number.

### What is a bit mask?

In a typical bit mask, the is simply another sequence of bits which has a `1` in the position of the bit we want to set or clear, and a `0` in the position of the bits we want to leave unchanged.

For example, let's say we have the number `11` again:

|position| 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|
|value| 0 | 1 | 0 | 1 | 1 |

And we have the mask `00010001`:

|position| 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|
|value| 0 | 1 | 0 | 1 | 1 |
|mask| 1 | 0 | 0 | 0 | 1 |
|new value| 0 | 0 | 0 | 0 | 1 |

Our new value will be `1`, because we only keep the bits that are `1` in the mask.

### When is bit masking useful?

Very simply, bit shifting is useful when we want to describe which bits we care about in a subset of bits. For example, if I just want to retrieve the value of the right-most bit, I could use a mask of `00000001`. If I want to retrieve the value of the left-most bit, I could use a mask of `10000000`.

### Bit masking in C

In C, we can use the `&` operator to perform a bitwise AND operation, which is the basis of bit masking that we've discussed so far. For example, to use the mask `00010001` to set the right-most bit of the number `11`, we would write:

```c
#include <stdio.h>

int main()
{
  int number = 11; // 00001011 in binary
  int mask = 17; // 00010001 in binary
  int masked_number = number & mask;
  printf("The number %d masked with %d is %d\n", number, mask, masked_number);

  return 0;
}
```

There are other forms of bit masking, such as using the `|` operator to perform a bitwise OR operation, and the `^` operator to perform a bitwise XOR operation. The same concepts apply, except with the or operator, the resulting bit position is set if either the original value or the mask has a `1` in that position, and with the xor operator, the resulting bit position is set if the original value and the mask have different values in that position.