// SpendWise Budget Calculator

// Step 2: Create variables to store budgeting information

let budget = Number(prompt("Enter your monthly budget:"));

// Step 3: Collect user input

let food = Number(prompt("Enter your food expense:"));
let transport = Number(prompt("Enter your transport expense:"));
let rent = Number(prompt("Enter your rent expense:"));
let entertainment = Number(prompt("Enter your entertainment expense:"));
let utilities = Number(prompt("Enter your utilities expense:"));

// Store all expenses in an array
let expenses = [food, transport, rent, entertainment, utilities];


// Step 5: Create reusable functions

// Function to calculate total expenses
function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense, 0);
}

// Function to calculate remaining balance
function calculateBalance(budget, expense) {
    return budget - expense;
}

// Function to calculate weekly budget
function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}


// Step 6: Store returned results inside variables

let totalSpent = calculateTotalExpenses(expenses);

let remainingBalance = calculateBalance(
    budget,
    totalSpent
);

let weeklyBudget = calculateWeeklyBudget(
    budget
);


// Step 7: Display all results in the console

console.log("===== SpendWise Budget Report =====");

console.log(
    `Monthly Budget: KSh ${budget.toFixed(2)}`
);

console.log(
    `Total Spent: KSh ${totalSpent.toFixed(2)}`
);

console.log(
    `Remaining Balance: KSh ${remainingBalance.toFixed(2)}`
);

console.log(
    `Weekly Budget: KSh ${weeklyBudget.toFixed(2)}`
);


// Conditional statement

if (remainingBalance >= 0) {
    console.log("You are within your budget.");
} else {
    console.log("You have exceeded your budget.");
}

