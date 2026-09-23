# SpendWise Dashboard

## Project Description

SpendWise is a simple personal budget dashboard designed to help users understand their monthly income, expenses, and remaining balance.

This version of the project builds the JavaScript foundation of the SpendWise dashboard. JavaScript is used to collect budget and expense figures from the user, perform calculations, and display the results in the browser console.

## Technologies Used

* HTML
* CSS
* JavaScript

## JavaScript Features

### 1. Variables

Variables are used to store information that the program needs to work with.

For example:

```javascript
let budget = Number(prompt("Enter your monthly budget:"));
```

The `budget` variable stores the user's monthly budget.

### 2. User Input with prompt()

The `prompt()` function allows the program to collect information from the user.

SpendWise asks the user to enter:

* Monthly budget
* Food expense
* Transport expense
* Rent expense
* Entertainment expense
* Utilities expense

The `Number()` function converts the entered values from text into numbers so that calculations can be performed.

### 3. Arrays

An array is used to store the different expense amounts together.

```javascript
let expenses = [food, transport, rent, entertainment, utilities];
```

This makes it easier to process all the expenses.

### 4. Reusable Functions

A reusable function is used to calculate the total expenses.

```javascript
function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense, 0);
}
```

The function receives the expense array and returns the total amount spent.

### 5. Calculations

The program calculates the total amount spent and the remaining balance.

```javascript
let totalSpent = calculateTotalExpenses(expenses);

let remainingBalance = budget - totalSpent;
```

The remaining balance is calculated by subtracting total expenses from the monthly budget.

### 6. Console Output

The program uses `console.log()` to display the results in the browser console.

The output includes:

* Monthly budget
* Total spending
* Remaining balance
* Whether the user is within or over the budget

Example:

```text
===== SpendWise Budget Report =====
Monthly Budget: KSh 50000.00
Total Spent: KSh 28950.00
Remaining Balance: KSh 21050.00
You are within your budget.
```

### 7. Conditional Statements

An `if` and `else` statement is used to determine whether the remaining balance is positive or negative.

```javascript
if (remainingBalance >= 0) {
    console.log("You are within your budget.");
} else {
    console.log("You have exceeded your budget.");
}
```

## Project Files

```text
SpendWise-Dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the structure and content of the SpendWise dashboard.

### style.css

Contains the styling, layout, colors, spacing, cards, and responsive design.

### script.js

Contains the JavaScript variables, user prompts, calculations, reusable function, conditional statement, and console output.

### README.md

Contains the project description and explanation of the JavaScript concepts used.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a web browser.
3. The JavaScript program will ask for the monthly budget and expense amounts.
4. Enter the requested figures.
5. Open the browser Developer Tools.
6. Select the **Console** tab.
7. View the SpendWise budget report.

## Learning Objectives

This project demonstrates the following JavaScript foundations:

* Declaring and using variables
* Collecting user input
* Converting input into numbers
* Using arrays
* Creating reusable functions
* Performing arithmetic calculations
* Using conditional statements
* Displaying formatted results with `console.log()`

## Author

Grace Kasyoka

```
```

