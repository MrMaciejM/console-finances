// this main.js file contains my solution to Challenge 04

// to-do:

// 1) The total number of months included in the dataset.
//console.log(finances);
console.log("total number of months in the dataset: " + finances.length);
console.log("============"); // separates logs for easier readability

// 2) The net total amount of Profit/Losses over the entire period.

//console.log(finances);
for (var i = 0; i < finances.length; i++) {
  // financeMoney returns all numbers, without the months
  var financeMoney = finances[i][1];
  if (financeMoney < 0) {
    console.log(financeMoney);
  }
}
//console.log(typeof finances[0][1]);
