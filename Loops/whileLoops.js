// Q1. Print numbers from 1 to 10 using while.
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//  Q2. Print all even numbers from 2 to 20 using while.
// let i = 2;
// while (i <= 20) {
//     if (i%2 ==0){
//         console.log(`${i} is even number`);
//     } 
//     i++;   
// }

// Q3. Print numbers from 10 to 1 (reverse) using while.
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// Q4. Given an array of fruits, print each fruit using a while loop.
// let fruits = ["apple", "banana", "cherry", "mango"];
// let i = 0;
// while (i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// Q5. Calculate the sum of numbers from 1 to 100 using while.
// let i = 1;
// let total = 0;

// while(i<100){
//     total += i;
//     i++;
// }

// console.log(total);

// Q6. Find the max number in this array using a while loop:
// let nums = [99, 123, 87, 2, 500, 67];
// let maxN = nums[0];
// let i = 0;
// while (i < nums.length){
//     if (nums[i] > maxN){
//         maxN = nums[i]
//     }
//     i++;
// }

// console.log(maxN);

// Q7. Keep doubling a number until it exceeds 1000. Print the final number.
// let num = 1;

// while (num <= 1000) {
//     num *= 2;
// }

// console.log(num);

//  Q8. Count how many vowels (a, e, i, o, u) are in this string:
// let str = "JavaScript while loops are fun!";
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;
// let i = 0;
// let lowerStr = str.toLowerCase();

// while (i < lowerStr.length){
//     if (vowels.includes(lowerStr[i])) {
//         count++;
//     }
//     i++;
// }

// console.log(count);

//  Q9. Print this triangle again using while loop instead of for:
// let i = 1;

// while (i <= 5){
//     let j = 1;
//     let stars = "";

//     while (j <= i){
//         stars += "*";
//         j++;
//     }
//     console.log(stars);
//     i++;    
// }


// Q10. Simulate a password checker:
const correctPassword = "taskbrain123";
let userInnput = prompt("Enter your password: ").trim()

while (userInput !== correctPassword) {
  console.log("Password wrong!");
  userInput = prompt("Enter correct password: ").trim();
}

console.log("✅ Password matched!");
