// this main.js file contains my solution to Challenge 04

// to-do:

// 1) The total number of months included in the dataset.
console.log("Financial Analysis\n==================");
console.log("Total Months: " + finances.length);
//console.log("============"); // separates logs for easier readability

// ===========================
// 2) The net total amount of Profit/Losses over the entire period.

// for loop to get the net total of all profits
// actual profit should be 45710004
var profits = 0;
for (var i = 0; i < finances.length; i++) {
  var financeMoney = finances[i][1];
  if (financeMoney > 0) {
    profits += financeMoney;
  }
}
console.log("Net Profit (all time): $" + profits);

// for loop to get the net total of all losses
// net losses should be -7327426
var losses = 0;
for (var i = 0; i < finances.length; i++) {
  var financeMoney = finances[i][1];
  if (financeMoney < 0) {
    losses += financeMoney;
  }
}
console.log("Net Losses (all time): $" + losses);

// ===========================
// 3)
/*
- The average of the **changes** in Profit/Losses over the entire period.
  - You will need to track what the total change in profits are from month to month and then find the average.
  - (`Total/Number of months`) 
  */
var averageProfitLosses = 0;
var counter = 0;
for (var i = 0; i < finances.length; i++) {
  var financeMoney = finances[i][1];
  averageProfitLosses += financeMoney;
  counter++;
}
console.log("Average change: " + (averageProfitLosses / counter).toFixed(3));
// the result is 446309.0465116279
// but i round it to third decimal place, which rounds the number

// ===========================
// 4) - The greatest increase in profits (date and amount) over the entire period.
var greatestIncrease = 0;
var greatestIncreaseMonth = "";
for (var i = 0; i < finances.length; i++) {
  var financeMonth = finances[i][0];
  var financeMoney = finances[i][1];
  if (greatestIncrease <= financeMoney) {
    greatestIncreaseMonth = financeMonth;
    greatestIncrease = financeMoney;
  }
}
console.log(
  `Greatest increase in profits: ${greatestIncreaseMonth} (${
    "$" + greatestIncrease
  })`
);

// 5) - The greatest decrease in profits (date and amount) over the entire period.
var greatestDecrease = 0;
var greatestDecreaseMonth = "";
for (var i = 0; i < finances.length; i++) {
  var financeMonth = finances[i][0];
  var financeMoney = finances[i][1];
  if (greatestDecrease >= financeMoney) {
    greatestDecreaseMonth = financeMonth;
    greatestDecrease = financeMoney;
  }
}
console.log(
  `Greatest loss in losses: ${greatestDecreaseMonth} (${
    "$" + greatestDecrease
  })`
);
