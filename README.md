# SpendWise Dashboard

## Project Overview

SpendWise is a financial dashboard that helps users understand their monthly budget, expenses, total spending, and remaining balance.

This project builds on the previous HTML and CSS dashboard shell by adding a JavaScript foundation for collecting financial information and performing calculations.

## What I Built

The SpendWise dashboard contains:

- Sidebar navigation
- Dashboard header
- Financial summary section
- Six financial categories
- Responsive layout
- CSS theme using custom properties
- JavaScript budget and expense calculations
- Console-based financial summary

## Financial Categories

The dashboard includes:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

The JavaScript foundation currently collects figures for the monthly budget and five expense categories.

## JavaScript Implementation

The JavaScript functionality is contained in `script.js`.

### Variables

JavaScript variables are used to store the user's budget and expense amounts.

For example:

```javascript
const budget = Number(prompt("Enter your monthly budget:"));
