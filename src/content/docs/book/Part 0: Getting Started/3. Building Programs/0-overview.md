---
title: Building Programs Overview
---

Before we build our first program, let's quickly explore why a build process is even necessary. As we explored previously, computers are machines which understand a very limited, precice instructions.

Technically, humans *can* write this precice language, however it is very difficult to do so. For example, here is a program written in machine code:

```
0100100100100000011011000110111101110110011001010010000001110100
0110100001100101001000000111010001101000001001001000000110110001
0110100001100101001000000111010001101000011001010010000001100011
0110111101110100011100110110100001100101001000000111010001101000
1100110010100100010000110010100100100000011101000110000011101000
```

Do you know what that program does?

Neither do we. So, instead of writing programs in machine code, we write them in a language that is easier for humans to understand, but precise enough that a computer can understand it. **A shared language.**

### A shared language
There are many of these shared languages, one of which is called C#. Here's a simple C# program:

```csharp
using System;

WriteLine("Hello, World!");
```

That looks a lot more like something we can understand, right? But, how does a computer understand it? Well, it doesn't. At least, not yet. We need to translate this program into machine code. This is where the build process comes in...