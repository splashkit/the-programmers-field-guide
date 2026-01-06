---
title: Bank System
sidebar:
    label: " - Bank System"
---

Create a small account management system for a bank. This will work with one account, which has a name, interest rate, and balance. Allow the user to print the account, deposit, withdraw, add interest, and quit the program.

When calculating the interest, you divide the interest rate by 365 and multiply it by the number of days the user indicates. This value, divided by 100, can then be multiplied by the balance to determine the amount of interest to add to the account.

```txt
Simple transaction record!

Enter account name: Andrew
Enter interest percent (+/-): 5.1
Enter initial amount: 1000

Actions:
1: Print account details
2: Deposit
3: Withdraw
4: Add interest
5: Quit
Option: 2

Amount deposited: -10
Please enter a value larger than or equal to 0
Amount deposited: 10
Balance: 1010.000000

Actions:
1: Print account details
2: Deposit
3: Withdraw
4: Add interest
5: Quit
Option: 3

Amount withdrawn: -10
Please enter a value larger than or equal to 0
Amount withdrawn: 10
Balance: 1000.000000

Actions:
1: Print account details
2: Deposit
3: Withdraw
4: Add interest
5: Quit
Option: 4

Interest for how many days: 30
Rate is 5.1% PA = 0.4191780822%
Interest = 4.1917808219
Balance = 1004.1917808219

Actions:
1: Print account details
2: Deposit
3: Withdraw
4: Add interest
5: Quit
Option: 1

Account: Andrew
Rate: 5.1%
Balance: 1004.1917808219

Actions:
1: Print account details
2: Deposit
3: Withdraw
4: Add interest
5: Quit
Option: 5
```

:::caution

Make sure your divisions use double, not integer values.  
Remember that 1 / 2 is 0, while 1 / 2.0 is 0.5.

:::

:::tip[Hints:]

Make sure to have an account struct and use procedures for each kind of transaction. You can then use pass-by-reference to allow the account to be updated within the procedure. Test out what occurs if you remove the `&`.

Ideally, your program should also include functions to [read and validate data from the user](/book/part-2-organised-code/1-structuring-code/3-guided-tour/00-2-explore-functions), and use an enum for the action/menu options, as well as a function that returns one of the enum values based on what the user chose (read menu option).

:::
