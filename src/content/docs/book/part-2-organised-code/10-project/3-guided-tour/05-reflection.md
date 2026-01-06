---
title: Reflection and next steps
sidebar:
    label: ' - Reflection and next steps'
---

Notice how you incrementally build the program - adding features to the model and front end a part at a time. This is generally how software is created. It is not built top-down or bottom-up, but sections at a time.

When adding new features, try to avoid duplicating code. For example, with the `select_cheese` we could have re-implemented the code to list the cheeses but this already existed elsewhere. Moving that existing code into a new function helps reduce duplication. When we change how this list works, we now only have to do it in one place.

## Next Steps

Have a go at adding in the code to create an order. The model will need functionality to add cheese to the order initially. This will then need new CLI code to show new menu options, read orders, and display orders.

We can then think further to features such as:

- Adding orders to the shop.
- Fulfilling orders - reducing stock on hand.
- Allow the user to find a cheese by name - this kind of behaviour will be needed once stock lists grow.
- Saving the stock to file and reloading it.
- Reporting sales, most popular products, etc.

Each of these involves building another slice of the program - involving tests, models, and user interface code - using and building upon the things you have already created in your code.
