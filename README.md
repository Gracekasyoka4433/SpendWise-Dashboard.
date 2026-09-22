# SpendWise Dashboard Shell

## Project Overview

SpendWise Dashboard is a responsive financial dashboard interface designed to provide users with a clear overview of their spending and budget categories.

This project focuses on building the visual structure of a modern dashboard using **HTML5 and CSS3**. No JavaScript functionality is required for this project.

## Project Description

SpendWise Dashboard Shell is a responsive financial dashboard created using HTML and CSS. It provides a visual foundation for a future budgeting and personal finance application.

## What I Built

The dashboard contains:

* A sidebar navigation menu
* A dashboard header with a welcome message and user profile
* Monthly budget summary information
* Six financial category cards
* Responsive layouts for smaller screens
* Hover and keyboard focus interactions
* A custom color theme using CSS variables
* A dark theme using CSS custom properties

## Financial Categories

The dashboard includes six realistic financial categories:
- Sidebar navigation menu
- Dashboard header
- User profile section
- Financial summary cards
- Six financial category cards
- Responsive mobile layout
- Light and dark color themes
- Hover and keyboard focus interactions

## Categories

The dashboard displays:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each category displays static financial information representing monthly spending or savings.

## Technologies Used

* **HTML5** – Used to create the structure and content of the dashboard.
* **CSS3** – Used for styling, layout, responsiveness, animations, and themes.

## CSS Grid and Flexbox

CSS Grid is used to create the overall dashboard layout and arrange the category cards.

Flexbox is used inside different parts of the dashboard, including:

* Header
* Sidebar navigation
* Summary information
* Financial category cards
* Profile section

No absolute positioning is used for the main page layout.

## CSS Custom Properties

The project uses CSS variables inside the `:root` selector to create a consistent theme.

The variables include:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color
* Border color

This makes it easier to maintain and change the dashboard's color scheme.

## Responsive Design

The dashboard includes a responsive design using a media query at **768px**.

On smaller screens:

* The dashboard changes to a single-column layout.
* The navigation adapts to the smaller screen.
* Summary sections stack vertically.
* Category cards display in a single column.
* The header adjusts to fit smaller screens.

The responsive layout can be tested using the browser's **DevTools Device Toolbar**.

## Card Micro-interactions

The financial cards include subtle interactions for better user experience.

When a user:

* Hovers over a card, or
* Focuses on a card using the keyboard,

the card moves slightly upward and displays a shadow effect.

The transition lasts **200 milliseconds**, which is within the required maximum of 250 milliseconds.

## Dark Theme

A dark theme is included as a stretch goal.

The dark theme is created by overriding the CSS custom properties inside the `:root` selector when the user's system is configured for dark mode.

## Project Files

```text
spendwise-dashboard/
│
├── index.html
├── style.css
└── README.md
```

### index.html

Contains the main structure of the SpendWise Dashboard, including the sidebar, header, summary section, and six financial category cards.

### style.css

Contains all styling for the dashboard, including:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive design
* Hover effects
* Keyboard focus effects
* Dark theme

### README.md

Provides an explanation of the project, its features, technologies used, and the purpose of each project file.

## Conclusion

The SpendWise Dashboard Shell provides a clean and responsive foundation for a financial management application. It demonstrates the use of modern CSS layout techniques, reusable CSS variables, responsive design, and basic user-interface micro-interactions.
## CSS Grid

CSS Grid is used for:

- The overall dashboard layout
- Financial summary cards
- Category cards

## Flexbox

Flexbox is used inside different parts of the dashboard, including:

* **Header** – to arrange the dashboard title, welcome message, and profile section.
* **Sidebar navigation** – to arrange the navigation links vertically and keep them evenly spaced.
* **Summary information** – to organize the budget, spending, and savings information.
* **Financial category cards** – to arrange the card content vertically and keep the information organized.
* **Profile section** – to align the user's name and profile icon neatly.


## CSS Custom Properties

The color theme is defined using CSS variables inside `:root`, including:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color

## Responsive Design

A media query at `768px` changes the dashboard into a single-column layout for smaller screens.

## Micro-interactions

Dashboard cards include subtle hover and keyboard focus animations using `transform` and `box-shadow`. The animations last less than 250ms.

## Dark Theme

A dark theme is included using:

```css
@media (prefers-color-scheme: dark)