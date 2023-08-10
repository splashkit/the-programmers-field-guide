---
title: Streams
---

Operating systems, like all programs, need to create *digital realities* for us to work with. We have seen how this applied to saved data, with files and folders. When we look at the execution environments, there is another concept we need to connect with - that of the **data stream**.

Data streams, often just referred to as streams, come from a river or water-flow metaphore. A stream is a flow of data either into or out of a program. You can picture this as the data *flowing* through the stream from a data source to a consumer. For example, data flowing from the keyboard into the program for it to respond to. Similarly, data can flow out of the program and onto terminal's display for the user to see.

**TODO image of data flowing from keyboard through a pipe to a program**

:::note

Data flows through a stream in order, so that the first piece of data added to the stream is the first piece of data out the other end.

:::

In Unix, streams are use as the metaphore for all data flows.

- **File streams** allow data to flow into or out of a file.
- **Network streams** allow data to flow between computers across a network.
- **Text streams** allow text to flow from things like the keyboard and to things like the shell's output.

:::tip

Having one common abstraction for these is great for us. It means that once you know how to work with a stream, you can apply the same knowledge to work with different sources of data.

:::

### Input, Output, and Errors

When you run a program, the operating system gives it **three** different data **streams** - one for input to be read, and two for outputs.

- **Standard input** is a text input stream for text your program can read.
- **Standard Output** is a text output stream for text that is coming out of your program.
- **Standard Error** is the secong text output steam that is used to output error messages.

#### Standard Input

The **standard input** stream provides your program with text input that it can read. By default, the shell will stream data from the keyboard to your program while it is running.

**Picture of data from the keyboard going into a program**

#### Standard Output

Programs can write text output to its **standard output** stream. By default, the shell will stream this to the terminal for the user to see.

**Picture of data from program going to the terminal**

#### Standard Error

Programs can write text output to its **standard error** stream. By default, the shell will stream this to the terminal for the user to see.

:::note

When you run a program normally, there is no difference between standard output and standard error, but there are ways of redirecting these streams at which time the two separate streams are useful to have.

:::
