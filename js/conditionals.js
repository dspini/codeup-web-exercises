"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// let analyzeColor = "red";
// if (analyzeColor === "blue") {
//     alert("blue is the color of the sky")
// } else if (analyzeColor === "red") {
//     alert("Strawberries are red")
// } else if (analyzeColor === "cyan") {
//     alert("I don't know anything about cyan")
// } else {
//     alert("I don't know your color???")
// }
// console.log(analyzeColor)

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// let analyzeColor = randomColor;
// if (analyzeColor === "blue") {
//     alert("blue is the color of the sky")
// } else if (analyzeColor === "red") {
//     alert("Strawberries are red")
// } else if (analyzeColor === "cyan") {
//     alert("I don't know anything about cyan")
// } else {
//     alert("I don't know your color???")
// }
// console.log(analyzeColor)

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// let color = randomColor;
// switch (color) {
//     case "blue":
//         alert("blue is the color of the sky")
//         break;
//     case "red":
//         alert("blue is the color of the sky")
//         break;
//     case "cyan":
//         alert("I don't know anything about cyan")
//         break;
//     default:
//         alert("I don't know your color???")
// }
// console.log(color)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userInput = prompt("what is your favorite color?")
// alert("You have entered: " + userInput)
// let analyzeColor = userInput;
// if (analyzeColor === "blue") {
//     alert("blue is the color of the sky")
// } else if (analyzeColor === "red") {
//     alert("Strawberries are red")
// } else if (analyzeColor === "cyan") {
//     alert("I don't know anything about cyan")
// } else {
//     alert("I don't know your color???")
// }
// console.log(analyzeColor)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// let calculateTotal = "5";
// if (calculateTotal === "0") {
//     alert("Sorry, no discount.")
// } else if (calculateTotal === "1") {
//     alert("Great, you get 10% discount!")
// } else if (calculateTotal === "2") {
//     alert("Wow, you get 25% discount!")
// } else if (calculateTotal === "3") {
//     alert("Awesome, you get 35% discount!")
// } else if (calculateTotal === "4") {
//     alert("Amazing, you get 50% discount!")
// } else if (calculateTotal === "5") {
//     alert("You are a big winner, 100% discount!!!")
// }
// console.log(calculateTotal)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// let userInput = prompt("What is your total bill?");
// alert("You have entered: $" + userInput)
// alert("Your lucky number is " + luckyNumber)
// if (luckyNumber == 0) {
//     var discountPercent = userInput * 0.00;
//     alert("Sorry, no discount.")
// } else if (luckyNumber == 1) {
//     var discountPercent = userInput * 0.10;
//     alert("Great, you get 10% discount!")
// } else if (luckyNumber == 2) {
//     var discountPercent = userInput * 0.25;
//     alert("Wow, you get 25% discount!")
// } else if (luckyNumber == 3) {
//     var discountPercent = userInput * 0.35;
//     alert("Awesome, you get 35% discount!")
// } else if (luckyNumber == 4) {
//     var discountPercent = userInput * 0.50;
//     alert("Amazing, you get 50% discount!")
// } else if (luckyNumber == 5)  {
//     var discountPercent = userInput * 1.00;
//     alert("You are a big winner, 100% discount!!!")
// } else if (luckyNumber == 6) {
//     var discountPercent = userInput * 0.00;
//     alert("Sorry, no discount.")
// }
// alert("Your bill was $" + userInput + " before you discount.");
// alert("Your bill is now $" + (userInput - discountPercent));
// console.log(userInput - discountPercent)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *git
 * HINT: The way we prompt for a value could be improved
 */

// var confirmed = confirm("Would you like to enter a number?");
// console.log(confirmed);
// if (confirmed === true) {
//     alert("Great, lets keep playing.");
// } else if (confirmed === false) {
//     alert ("Thanks for Visiting")(exit.html);
// }
// var userInput = prompt("Please enter your number.");
//     alert("You entered the number " + userInput);
// console.log(userInput);
// if(userInput % 2 == 0) {
//     alert ("Your number is an even number.");
// } else {
//     alert("Your number is an odd number.");
// }
// let total = parseInt(userInput) + 100;
//     alert("Your number plus 100 is equal to " + total);
// if (userInput >0) {
//     alert ("your number is a positive number.")
// } else if (userInput <0){
//     alert ("your number is a negative number.")
// } else if (userInput == 0) {
//     alert ("your number is not positive or negative.")
// }
// alert ("Thank you for playing!")


