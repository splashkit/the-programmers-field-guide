---
title: "Boolean Data"
---

The boolean [type](../../../1-sequence-and-data/1-concepts/07-type) is used to represent **truth**. A boolean value will either be **true** or **false**. These values are used extensively in the control flow statements to determine which instruction to perform next.

<a id="FigureBooleanData"></a>

![Figure x.y: Boolean data represents truth](./images/boolean-data.png "Boolean data represents truthe")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Boolean data represents truth</div><br/>

:::note

- The boolean type is named after George Bool's boolean logic.
- Boolean is an existing [type](../../../1-sequence-and-data/1-concepts/07-type) that has been defined within the language to represent truth values.
- A boolean value is either **true** or **false**. You can also think of these as yes or no.
- Boolean values are used in most of the control flow statements.
- The boolean type can be used in the same way as other types to declare variables.
- You can use `true` and `false` as boolean [literals](../../../1-sequence-and-data/1-concepts/05-literal).
:::

## Boolean - why, when, and how

You will use boolean values, comparisons, and boolean logic throughout your program. Every time you want to make a decision, and boolean will be there to help you check which conditions are true and thereby help your code work out what to do next.

Create boolean variables to store, remember, and work with conditions, or evaluate these on the fly with comparisons. With the boolean you are always asking "is this true", and you can then connect these conditions to the actions you want performed through the control flow statements.

## Examples

There are some useful methods in SplashKit that you can use to ask about user actions, as shown in the following table. You can use these to create conditions based on things the user has done. For example, have they asked to quit the program, or have they typed the escape key?

|**Method** | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`QuitRequested`| None | Has the user asked to quit the program? |
|`AnyKeyPressed`| None | Did the user press any key? |
|`KeyUp`| A key code | Is the indicated key *up*? |
|`KeyDown`| A key code | Is the indicated key held *down*? |
|`KeyReleased`| A key code | Was the key down and then released? |
|`KeyTyped`| A key code | Was the key up and then typed (pressed down)? |
|`MouseClicked`| A mouse button | Was the indicated mouse button clicked? |
|`MouseDown`| A mouse button | Is the indicated mouse button held down? |
|`MouseUp`| A mouse button | Is the indicated mouse button up? (not held down) |
