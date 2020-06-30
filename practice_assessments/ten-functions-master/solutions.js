"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function addOne(input) {
    // if (!isNaN(input)) {
    //     return parseFloat(input) + 1;
    // } else {
    //     return NaN;
    // }
    return parseFloat(input) + 1;
}

function not(input) {
    return !input;
}

function isEven(num) {
    return parseFloat(num) % 2 === 0;
}

function isIdentical(value1, value2) {
    return value1 === value2;
}

function isEqual(value1, value2) {
    return value1 == value2;
}

function or(value1, value2) {
    return value1 || value2;
}

function and(value1, value2) {
    return value1 && value2;
}

function concat(value1, value2) {
    return "" + value1 + value2;
}