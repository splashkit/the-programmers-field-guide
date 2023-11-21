---
title: Arrays in Change Calculator
---

Currently, the change calculator needs to recreate each of the coins as it calculates the necessary change. The following code shows the steps to calculate the change. In this, the `new_coin` function takes the indicated coin type and returns the related coin data.

```cpp
void give_change(int change_value)
{
  int to_give;

  write("Change: ");

  for (int i = 0; i < NUM_COIN_TYPES; i++)
  {
    coin_data coin = new_coin(coin_kind(i));

    // Give Change
    to_give = change_value / coin.value;
    change_value = change_value - to_give * coin.value;
    write(to_string(to_give) + " x " + coin.text);
  }

  write_line();
}
```

Arrays give us the opportunity to do this differently. We could set up a machine, that has the coins. Then we can just loop through the coins in the machine. We no longer need the enum, as this was used to determine which coin we needed. Removing this is good, as we can now support different currencies by just changing the data we load into the machine's coins.

So how do we do this? Let's start with a plan.

## Machine Data Plan

In the change calculator we need to know the number of different kinds of coins in the machine. These need to be in descending value, so that we can give the largest value coins first.

To capture this we can create a `machine_data` struct, that internally has a number of coins (an array of `coin_data` values) and the number different coins the machine has.

```
Const:
- MAX_COINS_TYPES: an integer for the maximum number of coin types (set to 10)

Struct: Machine Data
Fields:
- Coins: an array of MAX_COINS_TYPES coin data
- Coin Coint: the number of coins types in the machine
```

:::tip

We only need the number of coins as we know that C/C++ does not track this for us. When you do similar things in other languages, if the language keeps track of the number of elements in the array then you do not need to keep track of this separately.

:::

The program could store a `machine_data` value in `main`, so that it is always available. We would need to add something to initialise the array, so we could create a `setup_machine` procedure for this purpose. This could be passed a reference to the `machine_data`, and we could hard code in the coins for now. We already have this in the `new_coin` code, so you could copy this and adjust it to store each coin in the machine rather than return it.

For example:

```cpp
void setup_coins(machine_data &machine)
{
  // There are 6 Australian coins
  machine.coin_count = 6;

  machine.coins[0].text = "$2, ";
  machine.coins[0].value = 200;
  
  machine.coins[1].text = "$1, ";
  machine.coins[1].value = 100;
  //...
}
```

In the `give_change` function, we can add a reference to the machine as a parameter (`void give_change(int change_value, machine_data &machine)`). Now we need to loop through the coins in the machine. The for loop should loop from 0 to `macihe.coin_count`. This will then work for any number of coins - depending on how we set up the machine.

Inside the loop, we can grab the coin data from the array. We could even do this with a local reference variable, to save copying the coin data. The data we would need can be read from the array in the machine (`coin_data &coin = machine.coins[i];`). The rest of the logic would remain the same.

Now we can remove the bits of code we no longer need:

- `NUM_COIN_TYPES` constant
- `coin_kind` enumeration
- `new_coin` function

## Coding and testing

Have a go at adjusting the code.

- Add the new `MAX_COINS_TYPES` constant
- Create the `machine_data` struct - after the `coin_data` struct
- Write the `setup_machine` procedure.
- Adjust `main` to create, and set up the machine.
- Adjust `give_change` to accept and use the machine
- Remove old, unnecessary code

Then you should be able to compile and test the program. It should work as before. As an activity, you could try commenting out the code in `setup_machine` and replacing it with the coins of a different currency. The rest of the program should not need any changes to make this work.

To take this a step further, we just need to look at how to move the data out of the program into a file that the program can read. Then you could change the currency without needing to adjust the code at all. We will look at doing this soon.
