// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let userAge = prompt('Enter your age:')
// if (userAge >= 18) {
//   alert('You are old enough to drive!')
// } else {
//   let ageDiff = 18 - userAge
//   alert(`You are left with ${ageDiff} years to drive.`)
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
//to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 23
// let yourAge = prompt('Enter your age:')
// let iAmOlder = myAge - yourAge
// let iAmYounger = yourAge - myAge
// if (myAge > yourAge) {
//   console.log(`I am ${iAmOlder} years older than you.`)
// } else if (myAge >! yourAge) {
//   console.log(`You are ${iAmYounger} years older than me.`)
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
let a = 5;
let b = 9;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

//ternary operator.
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//let userNum = prompt('Enter a number:')
//if (userNum % 2 == 0) {
//console.log(`${userNum} is an even number`)
//} else if (userNum % 2 !== 0) {
// console.log(`${userNum} is an odd number`)
//}

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
let grade = 10; //prompt(`Enter your score to know your grade.`)
switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70 && grade <= 79:
    console.log("B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("D");
    break;
  case grade >= 0 && grade <= 49:
    console.log("F");
    break;
  default:
    console.log(`Enter your grade`);
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = "monday"; // prompt("What month is it?");
let season = month.toLowerCase();
switch (true) {
  case season == "september" || season == "october" || season == "november":
    console.log("The season is Autumn");
    break;
  case season == "december" || season == "january" || season == "february":
    console.log("The season is Winter");
    break;
  case season == "march" || season == "april" || season == "may":
    console.log("The season is Spring");
    break;
  case season == "june" || season == "july" || season == "august":
    console.log("The season is Summer");
    break;
  default:
    console.log(`Enter a month`);
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let userInput = "sunday"; //prompt("What is the day today?");
let day = userInput.toLowerCase();
switch (true) {
  case day == "saturday":
    console.log("Saturday is a weekend.");
    break;
  case day == "sunday":
    console.log("Sunday is a weekend.");
    break;
  case day == "monday":
    console.log(" Monday is a working day.");
    break;
  case day == "tuesday":
    console.log(" Tuesday is a working day.");
    break;
  case day == "wednesday":
    console.log(" Wednesday is a working day.");
    break;
  case day == "thursday":
    console.log(" Thursday is a working day.");
    break;
  case day == "friday":
    console.log(" Friday is a working day.");
    break;
  default:
    console.log(`Enter a valid day of the week`);
}

// Exercises: Level 3
// Write a program which tells the number of days in a month.
let userPrompt = prompt("Enter a month:");
let months = userPrompt.toLowerCase();
switch (true) {
  case months == "september" ||
    months == "april" ||
    months == "june" ||
    months == "november":
    console.log(`${months} has 30 days`);
    break;
  case months == "january" ||
    months == "march" ||
    months == "may" ||
    months == "july" ||
    months == "august" ||
    months == "october" ||
    months == "december":
    console.log(`${months} has 31 days`);
    break;
  case months == "february":
    console.log(`${months} has 28 days`);
    break;
  default:
    console.log(`Enter a valid month`);
}

// Write a program which tells the number of days in a month, now consider leap year.
let usersPrompt = prompt("Enter a month:");
let months1 = usersPrompt.toLowerCase();
switch (true) {
  case months1 == "september" ||
    months1 == "april" ||
    months1 == "june" ||
    months1 == "november":
    console.log(`${months1} has 30 days`);
    break;
  case months1 == "january" ||
    months1 == "march" ||
    months1 == "may" ||
    months1 == "july" ||
    months1 == "august" ||
    months1 == "october" ||
    months1 == "december":
    console.log(`${months1} has 31 days`);
    break;
  case months1 == "february":
    console.log(`${months1} has 28 days`);
    break;
  default:
    console.log(`Enter a valid month`);
}
