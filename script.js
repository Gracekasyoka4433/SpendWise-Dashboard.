// SpendWise Dashboard - JavaScript Foundation

const budget = Number(prompt("Enter your monthly budget:"));

const food = Number(prompt("Enter your food expenses:"));
const transport = Number(prompt("Enter your transport expenses:"));
const rent = Number(prompt("Enter your rent expenses:"));
const entertainment = Number(prompt("Enter your entertainment expenses:"));
const utilities = Number(prompt("Enter your utilities expenses:"));

function calculateTotalSpending(expenses) {
    return expenses.reduce((total, expense) => total + expense, 0);
}

function calculateRemainingBalance(budget, totalSpending) {
    return budget - totalSpending;
}

const expenses = [
    food,
    transport,
    rent,
    entertainment,
    utilities
];

const totalSpending = calculateTotalSpending(expenses);

const remainingBalance = calculateRemainingBalance(
    budget,
    totalSpending
);

console.log("===== SpendWise Financial Summary =====");
console.log(`Monthly Budget: KSh ${budget.toFixed(2)}`);
console.log(`Total Spending: KSh ${totalSpending.toFixed(2)}`);
console.log(`Remaining Balance: KSh ${remainingBalance.toFixed(2)}`);

if (remainingBalance >= 0) {
    console.log("Status: You are within your budget.");
} else {
    console.log("Status: You have exceeded your budget.");
}

console.log("=======================================");