'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

budget[0].value = 100;
// This object now is immutable, it can't be changed or declared new properties
// Object.freeze is not deep freeze, it will freeze only first level.
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.joy = 200;
// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// const limit = spendingLimits[user] || 0;
// const limit = getLimit(user);
console.log(spendingLimits);

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};

addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    // const limit = getLimit(entry.user);

    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

    // if (entry.value <= -bigLimit) {
    //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
    // }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);

logBigExpenses(100);
