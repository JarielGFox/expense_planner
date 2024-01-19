> Create two components:

A parent component will be called NewExpense and will contain a div and within this div it will call the other component.

- The other component to be recalled within NewExpense will be called ExpenseForm and inside it you will have to insert the full <form> where we will subsequently manage the addition of a new expense item.

To add a new expense it is important that these 3 pieces of information are present: title, amount, description.

> Your goal is to then create 3 different inputs to manage these 3 values.

- NewExpense:
- classname new-expense sul div
- ExpenseForm:

form no className
generic div that will contain all 3 inputs will have className 'new-expense**controls' <-- ONLY ONE
div containing the label and input structure will have className new-'expense**control' <-- REPEAT 3 TIMES
the button to add the expense (which must not work) will be wrapped in a div with classname new-expense\_\_actions <-- ONLY ONE
