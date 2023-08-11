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

#### Standard Input (stdin)

The **standard input** stream provides your program with text input that it can read. By default, the shell will stream data from the keyboard to your program while it is running.

**Picture of data from the keyboard going into a program**

#### Standard Output (stdout)

Programs can write text output to its **standard output** stream. By default, the shell will stream this to the terminal for the user to see.

**Picture of data from program going to the terminal**

#### Standard Error (stder)

Programs can write text output to its **standard error** stream. By default, the shell will stream this to the terminal for the user to see.

:::note

When you run a program normally, there is no difference between standard output and standard error, but there are ways of redirecting these streams at which time the two separate streams are useful to have.

:::

### Redirection

One of the great features of streams is the ability the operating system provides to **redirect** them. Using this feature, you can change where the data for standard input comes from, and where standard output and standard error go.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Redirect stdout to new file           |`>`      | Send output to a new file |
|Append stdout to existing file           |`>>`      | Send output to the end of an existing file |
|Redirect stderr to new file           |`2>`      | Send output to a new file |
|Append stderr to existing file           |`2>>`      | Send output to the end of an existing file |
|Use a file to source stdin           |`<`      | Send output to the end of an existing file |

:::note

Each stream has an unique number - 0 for stdin, 1 for stdout, and 2 for stderr. This is the `2` in `2>>`. You can redirect one stream to another using these identifiers. For example, `2>&1` will redirect stderr to stdout.

:::

To test this out, we need another cool utility [wc](https://man.cx/Wc)

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Count words           |`wc`      | Outputs the number of words, lines or characters from stdin |


```sh
echo “Here is a new file!” > lines.txt
ls >> lines.txt
cat lines.txt
# the file will contain the message and file list

ls . NO_FILE > lines.txt 2>&1
cat lines.txt
# the error and current file list are shown

wc -l < lines.txt
# outputs the lines in lines.txt
```

### Pipes

Pipes offer another option for redirecting streams. In this case you can connect the output from one program to the input of another. This is a super powerful feature, allowing you to combine together multiple programs.

To explore this lets look at one more tool: [grep](https://man.cx/Grep). Grep is one of the most useful tools with pipes. With grep you can filter standard input to only return lines that match the patterns you provided to grep. For now the patterns can just be exact text matches, but grep provides much more powerful pattern matching capabilities, which you can explore later.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Filter stdin           |`grep`      | Filter stdin and output only lines that match the given pattern |
|Connect programs |`|`      | Send stdout from program to stdin of another |

```sh

cat /etc/shells | grep sh | wc -l 

# output from cat, is piped to grep
# grep filters to lines with “sh” in them
# output of grep is piped to wc
# wc outputs number of lines

```
