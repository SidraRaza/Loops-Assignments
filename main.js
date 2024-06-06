"use strict";
const myWork = [];
for (let i = 1; i <= 10; i++) {
    const lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 0 ? false : true
    };
    myWork.push(lesson);
}
console.log(myWork);
// question#2
const maxValue = 100;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number: ${randomNumber}`);
let isGuessCorrect = false;
const guesses = [50, 75, 25, 90, 60, 30, 40, 70, 10, 80];
let guessIndex = 0;
while (!isGuessCorrect && guessIndex < guesses.length) {
    const currentGuess = guesses[guessIndex];
    console.log(`Guess: ${currentGuess}`);
    if (currentGuess === randomNumber) {
        isGuessCorrect = true;
        console.log("Correct Guess!");
    }
    else if (currentGuess > randomNumber) {
        console.log("Too High!");
    }
    else {
        console.log("Too Low!");
    }
    guessIndex++;
}
// question#3
let counter = 0;
const step = 5;
do {
    console.log(`Counter: ${counter}`);
    counter += step;
} while (counter < 100);
// question#4
const myObject = { item1: 'Value 1', item2: 'Value 2', item3: 'Value 3' };
for (const property in myObject) {
    console.log(`Property: ${property}, Value: ${myObject[property]}`);
}
// question#5
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (const value of myArray) {
    console.log(value);
}
