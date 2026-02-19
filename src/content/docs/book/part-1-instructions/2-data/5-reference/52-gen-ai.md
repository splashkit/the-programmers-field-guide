---
title: Generative AI Functions
sidebar:
    label: " - GenAI Functions"
---

Functions can perform simple or complex operations. SplashKit includes functions that allow you to interact with a local large language model (LLM). We can use this to integrate generative AI tools into our programs.

## Available models

SplashKit integrates a few models that are suitable to run locally, and will give you reasonable capability. There are two main models:

- [Qwen3](https://qwen.readthedocs.io/en/latest/)
- [Gemma 3](https://blog.google/technology/developers/gemma-3/)

With different variants for parameter size and fine-tuning.

By default, SplashKit will use the [Qwen3 0.6B Instruct model](https://huggingface.co/Qwen/Qwen3-0.6B-GGUF) for replies to prompts, and [Qwen3 0.6B base model](https://huggingface.co/Qwen/Qwen3-0.6B-Base). This model has been fine-tuned to respond to instructions, giving you the ability to interact in a chat style similar to online LLM tools.

## Generating output

SplashKit provides functions to generate text or a reply to a prompt. The signatures for these functions are listed below.

```c++
string generate_reply(string prompt);
string generate_text(string text);
string generate_text(string text, int max_tokens);
```

You use `generate_reply` to respond to the question or prompt you provide. Whereas, `generate_text` is used to generate the words that follow the text you provide. You can specify the maximum number of tokens to use in generating the text, otherwise this defaults to 125. Here is an example of each of these in action.

```c++
#include "splashkit.h"

int main() 
{
    string output;
    output = generate_reply("Tell me a knock-knock joke.");
    write_line(output);

    output = generate_text("The capital of Victoria is", 4);
    write_line(output);
}
```

SplashKit will download models when you first use them, and will show you progress as things download. The next time you run the program, the models are already available, so nothing will need to be downloaded.

:::tip
The default models are small and fast, so will have limited world knowledge and capability.
:::

:::danger
Generative AI models are resource intensive, and we are running this on your CPU. Be patient. Responses can take time for longer text outputs. Keep the expected response short to help make things work quickly, and use a small number of tokens when generating text.
:::

## Selecting a model

If you want to work with something other than the default model, you can pass in an additional argument to indicate the model you want to use. Available options are listed below.

```c++
string generate_reply(language_model model, string prompt);
string generate_text(language_model model, string text);
string generate_text(language_model model, string text, int max_tokens);
```

Here is an example where we ask the user what they want to do, using the `QWEN3_1_7B_INSTRUCT` model.

```c++
#include "splashkit.h"

int main()
{
    string user_prompt;
    string option;

    write(" > ");
    user_prompt = read_line();

    const string OPTION_CHECK = "Does user A want to quit, get the time, or something else? Answer with one word, either QUIT, TIME, or OTHER:"
    
    option = generate_reply(QWEN3_1_7B_INSTRUCT, "User A: " + user_prompt + "\n" + OPTION_CHECK);

    write_line("You chose... " + option);
}
```

Available models are:

<div style=" max-height:33em; overflow-y: scroll;">

| <div style="width:11em;">**Model Identifier**</div> | **Model** | **Description** |
-------- | -------- | -------------------------------- |
`QWEN3_0_6B_BASE` | Qwen3 0.6B Base model | small, extremely fast and good for text completion. Very limited world knowledge. |
`QWEN3_0_6B_INSTRUCT` | Qwen3 0.6B Instruct model (default) | small, extremely fast and can follow simple instructions. Very limited world knowledge. |
`QWEN3_0_6B_THINKING` | Qwen3 0.6B Thinking model | small, extremely fast and can follow more specific instructions, but has a short delay before starting to reply. Very limited world knowledge. |
`QWEN3_1_7B_BASE` | Qwen3 1.7B Base model | decently fast and good for text completion. Limited world knowledge. |
`QWEN3_1_7B_INSTRUCT` | Qwen3 1.7B Instruct model | decently fast and can follow instructions. Limited world knowledge. |
`QWEN3_1_7B_THINKING` | Qwen3 1.7B Thinking model | decently fast and can follow more difficult instructions, but has a delay before starting to reply. Limited world knowledge. |
`QWEN3_4B_BASE` | Qwen3 4B Base model | slower but excellent for text completion/pattern based completion |
`QWEN3_4B_INSTRUCT` | Qwen3 4B Instruct model | slower but can follow complex instructions |
`QWEN3_4B_THINKING` | Qwen3 4B Thinking model | slower but can follow complex and specific instructions, but has a potentially long delay before starting to reply |
`GEMMA3_270M_BASE` | Gemma3 270M Base model | tiny, extremely fast, and good for text completion. Very limited world knowledge. |
`GEMMA3_270M_INSTRUCT` | Gemma3 270M Instruct model | tiny, extremely fast, and good for very simple instructions. Very limited world knowledge. |
`GEMMA3_1B_BASE` | Gemma3 1B Base model | fast and good for text completion. Has decent world knowledge and multilingual abilities. |
`GEMMA3_1B_INSTRUCT` | Gemma3 1B Instruct model | fast and can follow instructions. Has decent world knowledge and multilingual abilities. |
`GEMMA3_4B_BASE` | Gemma3 4B Base model | slower but good for text completion/pattern based completion. Has decent world knowledge and multilingual abilities. |
`GEMMA3_4B_INSTRUCT` | Gemma3 4B Instruct model | slower but can follow complex instructions. Has decent world knowledge and multilingual abilities. |

</div>

## Conversations

You can also create conversations to keep track of prior context. This uses functions and procedures with the following signatures:

```c++
// Start a conversation with
conversation create_conversation();
conversation create_conversation(language_model model);

// Add messages from the user to the conversation
void conversation_add_message(conversation c, const string& message);

// Get the LLM reply
string conversation_get_reply(conversation conv);

// Clean up when you are finished
void free_conversation(conversation c);
```

Here is an example of this in action:

```c++
#include "splashkit.h"

int main() 
{
    conversation conv;
    conv = create_conversation(QWEN3_1_7B_INSTRUCT);

    conversation_add_message(conv, "Give me a random word, without formatting or additional output");

    string reply = conversation_get_reply(conv);
    write_line(reply);

    conversation_add_message(conv, "and another");
    reply = conversation_get_reply(conv);
    write_line(reply);

    free_conversation(conv);
}
```

