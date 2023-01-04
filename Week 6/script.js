const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while
//and do while loop
for (i = 0; i <= 10; i++) {
  console.log(i);
}

let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}

let b = 0;
do {
  console.log(b);
  b++;
} while (b <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (i = 10; i >= 0; i--) {
  console.log(i);
}

let c = 10;
while (c >= 0) {
  console.log(c);
  c--;
}

let d = 10;
do {
  console.log(d);
  d--;
} while (d >= 0);

// Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():

let hash = "";
for (i = 0; i < 8; i++) {
  hash += "#";
  console.log(hash);
}

// Use loop to print the following pattern
for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Using loop print the following pattern
for (i = 0; i <= 10; i++) {
  let a = `${i}`;
  console.log(a);
  let b = `${i ** 2}`;
  console.log(b);
  let c = `${i ** 3}`;
  table = `${a} \t ${b} \t ${c}`;
  console.log(table);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// Use for loop to iterate from 0 to 100 and print only prime numbers
for (k = 2; k <= 100; k++) {
  console.log(k);
  let isPrime = true;
  for (j = 2; j < k; j++) {
    if (k % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(k);
  }
}
// Write a script which generates a random rgb color number.
let rgb = [];
for (k = 0; k < 3; k++) {
  rgb.push(Math.floor(Math.random() * 256));
}
console.log(`rgb(${rgb})`);

// Using the above countries array, create the following new array.
let newArr = [];
for (i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

// Using the above countries array, create an array for countries length'.
let countriesLength = [];
for (i = 0; i < newArr.length; i += 1) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

// Use the countries array to create the following array of arrays:
let arrOfArr = [];
for (i = 0; i < countries.length; i++) {
  let countriesArr = [];
  countriesArr.push(
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length
  );
  arrOfArr.push(countriesArr);
}
console.log(arrOfArr);
console.log(countries.includes("Finland"));
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land',
// print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let land = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    land.push(countries[i]);
  }
}
console.log(land);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as
//array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let ia = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) {
    ia.push(countries[i]);
  }
}
console.log(ia);

// Using the above countries array, find the country containing the biggest number of characters.
let max = 0;
let longest = "";
for (i = 0; i < countries.length; i++) {
  if (countries[i].length > max) {
    max = countries[i].length;
    longest = countries[i];
  }
}
console.log(longest);

// Using the above countries array, find the country containing only 5 characters.
let five = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    five.push(countries[i]);
  }
}
console.log(five);

// Find the longest word in the webTechs array
let maxW = 0;
let longestW = "";
for (i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > maxW) {
    maxW = webTechs[i].length;
    longestW = webTechs[i];
  }
}
console.log(longestW);

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let arrWeb = [];
for (i = 0; i < webTechs.length; i++) {
  let arrw = [];
  arrw.push(webTechs[i], webTechs[i].length);
  arrWeb.push(arrw);
}
console.log(arrWeb);

// An application created using MongoDB, Express, React and Node is called a MERN
// stack app. Create the acronym MERN by using the array mernStack
let companyName = "";
for (a = 0; a < mernStack.length; a++) {
  companyName += mernStack[a].slice(0, 1);
}
console.log(companyName);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
//"Express", "MongoDB"] using a for loop or for of loop and print out the items.
let array = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (n = 0; n < array.length; n++) {
  console.log(array[n]);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop
//without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
let fruitReverse = [];
for (x = fruits.length - 1; x >= 0; x--) {
  fruitReverse.push(fruits[x]);
}
console.log(fruitReverse);

// Print all the elements of array as shown below
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (n = 0; n < fullStack.length; n++) {
  for (i = 0; i < fullStack[n].length; i++) {
    console.log(fullStack[n][i]);
  }
}

// Exercises: Level 3
// Copy countries array(Avoid mutation)
let countriesCopy = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// Arrays are mutable. Create a copy of array which does not modify the original.
//Sort the copied array and store in a variable sortedCountries
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

// Sort the webTechs array and mernStack array
webTechs;
let sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);
mernStack;
let sortedMernStack = mernStack.sort();
console.log(sortedMernStack);

// Extract all the countries contain the word 'land' from the countries array and print it as array
let containsLand = [];
for (l = 0; l < countries.length; l++) {
  if (countries[l].includes("land")) {
    containsLand.push(countries[l]);
  }
}
console.log(containsLand);

// Find the country containing the hightest number of characters in the countries array
countries;
let longestString;
let max1 = 0;
for (s = 0; s < countries.length; s++) {
  if (countries[s].length > max1) {
    max1 = countries[s].length;
    longestString = countries[s];
  }
}
console.log(longestString);
// Extract all the countries containing only four characters from the countries array and print it as array
let onlyFour = [];
for (t = 0; t < countries.length; t++) {
  if (countries[t].length == 4) {
    onlyFour.push(countries[t]);
  }
}
console.log(onlyFour);
// Extract all the countries containing two or more words from the countries array and print it as array
let twoOrMore = [];
for (t = 0; t < countries.length; t++) {
  if (countries[t].length >= 2) {
    containsLand.push(countries[t]);
  }
}
console.log(containsLand);
//Reverse the countries array and capitalize each country and stored it as an array
let reversedCountries = [];
for (r = countries.length - 1; r >= 0; r--) {
  reversedCountries.push(countries[r].toUpperCase());
}
console.log(reversedCountries);
