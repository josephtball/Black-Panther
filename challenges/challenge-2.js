/*
Here's your coding interview problem for today.

This problem was asked by Uber.

Given an array of integers, return a new array such that each
element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const integers = [1, 2, 3, 4, 5];
let products = [];

for (let i = 0; i < integers.length; i++) {
    let product = 1;
    for (let j = 0; j < integers.length; j++) {
        if (i !== j) {
            product = product * integers[j];
        }
    }
    products.push(product);
}

console.log(products);