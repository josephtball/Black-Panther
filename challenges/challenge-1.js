/*
Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const numbers = [10, 15, 3, 7];
const k = 17;

for (let i = 0; i < numbers.length; i++) { // loop through numbers array
    for (let j = 0; j < numbers.length; j++) { // loop through numbers array again to get second number to add to number from first for loop
        if (i !== j && numbers[i] + numbers[j] === k) { // check to prevent adding a number to itself & if the two numbers equal k
            return console.log(true); // return true if the two numbers equal k
        }        
    }    
}

return console.log(false); // return false if no two numbers equal k