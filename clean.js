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

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget1);
// console.log(newBudget2);
// console.log(newBudget3);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });

//   // for (const entry of budget) {
//   //   // const limit = getLimit(entry.user);

//   //   if (entry.value < -getLimit(entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
// };

// Arrow function
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
// console.log(newBudget3);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ')
    // .reduce((str, cur, ) => `${str} / ${cur}`);

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of newBudget3) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   // }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);

logBigExpenses(finalBudget, 500);
