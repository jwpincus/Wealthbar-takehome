# Readme for WealthBar Take-home challenge

## setup
This project is managed using NPM

1. Clone this repo using git
2. from inside the root folder run `npm install`
3. To run a dev server run `npm start`
4. To run the unit tests on the calculator functions run `jest`

## Design

create-react-app was used to scaffold out a basic react application. React was chosen based on ability to rapidly build out UI.

The presentation layer and the math logic are split out for testing, and out of respect for seperation of concerns. Unit testing is done using the Jest library, and the CompoundInvestmentGrowth class was developed using TDD. 

This is admittedly a heavyweight choice of tools for something that could also have been accomplished with HTML, CSS, and JS. I feel that the testing advantages, and ability to take a more object oriented approach justifies this.

The code is, as much as possible, meant to be self documenting through testing careful naming.

## Known Issues

This Calculator does not address the following:

- Provincial tax rates
- Contribution limits and forced liquidation age for RRSP
- Additional yearly contributions

## The Problem: TFSA vs RRSP Calculator
The goal of this test is to create a financial calculator that compares using a TFSA (tax-free savings account) and RRSP (registered retirement savings plan) to save money.

RRSPs allow Canadians to defer paying taxes until they withdraw money from their account. In practice Canadians get a tax refund on the money they deposited into RSP. A TFSA, on the other hand, allows Canadians to save their after tax money in a way that the future growth (interest earned) remains tax-free forever so all future withdrawals are not taxed.


This calculator will require the following input fields

- Current Marginal Tax Rate - This is the highest income tax bracket of the “user”

- Average Tax Rate in Retirement - This is the average income tax the “user” pays in retirement

- Amount of Deposit - The amount of money being deposited in the comparison

- Years Invested - The number of years before this money is withdrawn again

- Return on Investment - Rate at which the invested money grows each year

- Inflation Rate - Expected rate of inflation each year (used to calculate the real rate of return)


It should produce the following results

- Amount of after-tax deposited in the TFSA vs RRSP (i.e., the RRSP deposit amount should be equivalent to the TFSA deposit in after-tax dollars, which should be larger considering that RRSP deposits are made tax-free)

- The future value (in today’s dollars) of the savings at the end of the investment period

- The tax paid upon withdrawal (only applies to money saved in the RRSP)

- The after-tax future value of the investment at the end of the investment period

Useful Formulas and Resources


The following resources help explain the necessary financial formulas and the basics of comparing TFSAs and RRSPs


- http://www.financeformulas.net/Real_Rate_of_Return.html

- http://www.financeformulas.net/Future_Value.html

- http://www.theglobeandmail.com/globe-investor/personal-finance/the-wealthy-barber-explains-tfsa-or-rrsp/article1356709/?page=all

- https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html


What are we looking for?


We are interested in how you solve the problem as well as your ability to understand and apply the financial concepts necessary to solve it. We will also be looking, subjectively, at coding style, code quality, code readability, tests, and effective use of the language's idioms and software design patterns. If you are using any frameworks we will be consider how you leverage them to write better code or simplify the problem. If you use a cli generator please clearly indicate the files you add or edit.


While not necessary credit will be given for providing a solid user experience. Communicating what the calculator does for the user and ensuring they can easily figure out how to use it and understand what the results presented mean is important.

Feel free to ask questions if anything is uncertain or confusing.