---
title: Product Database
sidebar:
    label: " - Product Database"
---

Create a program that will manage the data associated with a shop's products.

The shop will have:

- a number of products (the system needs to support up to 100 products)
- total sales (dollars)
- total profit (dollars)

Each product will have:

- a name
- a cost price
- a sale price
- a number on hand (how many of these products the store has)

The program will need to allow the user to:

- Add a new product

  As long as there is capacity, the user will be asked to enter the name, cost, sale price, and number on hand.

- Delete a product

  The user is asked to enter the name to search for, and is then shown a numbered list of all the products that contain that text to choose from. They enter the number of the product they want, and it is removed from the system.

- Update a product

  The user selects a product in the same way they did for delete product. In this case, they are then shown the details of the product and a list of options to choose from. These include:

  - Update name
  - Update cost
  - Update sale price
  - Update number on hand
  - Quit update

  Based on what the user selects, they are asked to enter the new details and these are used to update the product in the system. They can then choose another option from this menu, which repeats until they choose to quit and return to the main menu.

- Sell a product

  The user selects a product as with delete or update. They then enter the number of units sold. The store's sale total is updated by adding the sale price of the product multiplied by the number sold. The store's total profit is updated by adding the total sale value minus the cost of the items sold.

- Print status

  The user is shown a report that contains:

  - Total sale value
  - Total profit
  - Number of products
  - Value of stock on hand (the cost price multiplied by the number on hand for each product)
  - Number of products with less than 10 items on hand. (low stock level)

- Quit

  Ends the program.

:::tip

Use a struct for the store data, this can contain the array, the number of products, and the sales and profit details. You can then pass this to functions and procedures you create.

:::

:::tip

Also have a product data struct. You can use this to store the data for one product, and pass it as a parameter when you are working with a single product.

:::

:::tip

Several of the features will require a search function. You can return the index of the product the user selected, and then the caller can determine what to do with the product selected.

:::
