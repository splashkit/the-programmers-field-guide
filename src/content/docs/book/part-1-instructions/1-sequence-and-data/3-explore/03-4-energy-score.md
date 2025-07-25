---
title: Daily Energy Score
sidebar:
    label: " - Daily Energy Score"
---

:::tip
Use this task to explore how simple numbers and sequences can form the basis of more meaningful feedback tools. You can use the suggested energy formula below, or create your own variation based on a different domain (e.g. athletic recovery, study focus, game performance).
:::

We can use sequence and data to simulate a basic wellbeing tool that calculates a daily “energy score” based on several lifestyle factors. This program will ask the user to enter scores from 1–10 for a few different areas, then calculate an overall energy level and display a summary message.


```txt
Welcome to your Daily Energy Score

Rate your sleep quality (1–10): 7  
Rate your mental focus (1–10): 5  
Rate your physical activity (1–10): 6  
Rate your stress level (1–10): 3  

Your energy score is: 25 out of 40  
That’s 62.5%  
```

You can use this approach to calculate the final result:

```txt
score = sleep + focus + activity + (10 - stress)
```

and

```txt
percentage = (score / 40.0) * 100
```

Or use an appropriate formula from your field!