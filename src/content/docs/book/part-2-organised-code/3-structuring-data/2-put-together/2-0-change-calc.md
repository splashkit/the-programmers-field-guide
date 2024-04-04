---
title: Change Calculator
---

The change calculator is at a reasonable place where we left it in the [structuring code](../../../2-organising-code/0-overview) chapter. However, we can think through the code to see where we can make some improvements by incorporating structs and enums.

## Coin Kind

In the code, we are looping through all the different coins, using the index to represent each coin. By introducing a `coin_kind` we can have a constant in the enumeration to more clearly represent these. This would give us something like the following description of the enum.

```
Enum: Coin Kind
Options:
  NO_COIN = -1,
  TWO_DOLLARS
  ONE_DOLLAR,
  FIFTY_CENTS,
  TWENTY_CENTS,
  TEN_CENTS,
  FIVE_CENTS,
```

When you make this change in the code, you should see that the compiler warns you if you try to assign a coin value variable anything other than one of the coin value options.

Declare the enumeration at the top of the cpp file, then it will be available throughout.

## Coin Data

Notice that in the code we also have a number of values associated with each coin. We have the coin's value, its textual description, and now it's kind. Instead of having these in separate individual variables we can code these within a coin type struct. 

The `coin_data` struct can store the data for one coin - containing its kind, value, and textual description. Going forward, if we start to add coin dispensers, we could also use the coin data struct to contain things like the number of each coin that we have in the machine.

```
Struct: Coin Type
Fields:
    kind: the coin_kind for the coin
    value: an integer value for the number of cents the coin represents
    text: a string description for the coin
```

## Initialising Coins

As with any data, one of the things we need to do is initialise the variable with meaningful values. In the fly game we created `new_spider` and `new_fly` functions to achieve this. We can do the same thing in the change calculator as well, creating a `new_coin` function. This will need to know the kind of coin to initialise, but we can then move the switch out of the loop and into this function.

```
Function: New Coin
Parameters:
    - kind: The kind of coin to create
Local Variables:
    - result: coin data
Steps:
    Set result's kind to the value of the kind parameter
    Switch based on kind
        when TWO_DOLLARS,
            set result's value to 200
            set result's text to "$2"
        when ONE_DOLLAR,
            set result's value to 100
            set result's text to "$1"
        when ... etc
        default
            set result's value to 0
            set result's text to "ERROR"
    return result
```

## Give Change

To implement this change in `give_change`:

- Change the declaration of the coin data to `coin_type`:

    In the existing code, we declare variables for the separate parts:

    ```cpp
    int coin_value;
    string coin_text;
    ```

    This can now be done using the struct type:

    ```cpp
    coin_type coin;
    ```

- Initialise the coin with the new function

    Remove the switch statement from the code, and use the new `new_coin` function.

    ```cpp
    coin_data coin = new_coin(coin_kind(i));
    ```

- Change the code in the change calculation to use the struct's fields:

    ```cpp
    to_give = change_value / coin_value;
    change_value = change_value - to_give * coin_value;
    write(to_string(to_give) + " x " + coin_text);
    ```

    Changes to:

    ```cpp
    to_give = change_value / coin.value;
    change_value = change_value - to_give * coin.value;
    write(to_string(to_give) + " x " + coin.text);
    ```

With this in place you should have the logic migrated to use the new struct and enum. Make sure to test that things still work before progressing. These changes will set a foundation that we can build on later.
