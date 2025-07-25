---
title: Solar Visualiser
sidebar:
    label: " - Solar Visualiser"
---

For this task you can build on the ideas from the [house drawing](/book/part-1-instructions/1-sequence-and-data/1-tour/02-00-house-drawing) tour. You may also find it useful to read about [drawing in SplashKit](/book/part-1-instructions/1-sequence-and-data/2-trailside/11-2-graphics/#drawing-to-a-window) and [playing sound effects in SplashKit](/book/part-1-instructions/1-sequence-and-data/2-trailside/11-3-audio) for this task.

For this task, you will create a simple **solar panel visualiser** that helps the user understand how much of their power use is covered by solar over the course of a year. You will display a basic bar chart showing:

- Monthly electricity **usage**
- Monthly **solar production**
- Any **shortfall** that needs to be purchased from the grid

This is a great example of how data and visual feedback can be combined into a clear, useful display using just basic shapes and colour.

---

### 🧮 How it works

The user will input:
- Their **monthly electricity usage** in kilowatt hours (kWh)
- The **size of their solar system** in kW

Your program will then:

- Simulate monthly solar output using a seasonal efficiency curve (approximate Melbourne values):

```txt
Jan = 1.0 (100%)
Feb = 0.95
Mar = 0.85
Apr = 0.75
May = 0.60
Jun = 0.50
Jul = 0.50
Aug = 0.60
Sep = 0.75
Oct = 0.85
Nov = 0.95
Dec = 1.0
```

- Multiply the solar size by the monthly efficiency and an average output factor (e.g. 4.0 kWh per kW per day × days in month) to get total production
- Compare solar vs usage
- Draw three bars for each month:
- **Blue bar** for usage
- **Green bar** for solar output
- **Red bar** only if solar < usage (i.e. unmet demand)

### ✏️ Example

```txt
Welcome to the Solar Visualiser

Enter your average monthly power usage (kWh): 600  
Enter your solar system size (kW): 5  

Drawing results...
```

A window should then open showing 12 months as columns. Each column will have:

- A blue rectangle showing usage
- A green rectangle showing solar output
- A red rectangle on top if the user needs to buy extra energy

Make sure you draw at least 3 types of shapes and use calculated values from the user input and seasonal efficiency.

:::caution

Don't focus too much on making it pretty! The key learning here is sequence and data.

:::
