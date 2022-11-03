import countries from "./countries.js";
import webTechs from "./web_techs.js";

//Declare an empty array
let emptyArray = [];
// Declare an array with more than 5 number of elements
let arrayOf6Elements = [1, 2, 3, 4, 5, 6, 7];
// Find the length of your array
console.log(arrayOf6Elements.length);
// Get the first item, the middle item and the last item of the array
let fItem = arrayOf6Elements[0];
console.log(fItem);
let mItem = arrayOf6Elements[3];
console.log(mItem);
let lItem = arrayOf6Elements.length - 1;
console.log(arrayOf6Elements[lItem]);
// Declare an array called mixedDataTypes, put different data
//types in the array and find the length of the array.
//The array size should be greater than 5
let mixedDataTypes = [1, 2, "drinks", "fruits", 7, true, "food"];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial
// values Facebook, Google, Microsoft, Apple, IBM, Oracle and
// Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of itCompanies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log(firstCompany);
let middleCompany = itCompanies[3];
console.log(middleCompany);
let lastCompany = itCompanies[6];
console.log(lastCompany);

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Change each company name to uppercase one by one and print them out
let companies0 = itCompanies[0].toUpperCase();
console.log(companies0);
let companies1 = itCompanies[1].toUpperCase();
console.log(companies1);
let companies2 = itCompanies[2].toUpperCase();
console.log(companies2);
let companies3 = itCompanies[3].toUpperCase();
console.log(companies3);
let companies4 = itCompanies[4].toUpperCase();
console.log(companies4);
let companies5 = itCompanies[5].toUpperCase();
console.log(companies5);
let companies6 = itCompanies[6].toUpperCase();
console.log(companies6);
// Print the array like as a sentence: Facebook, Google,
//Microsoft, Apple, IBM,Oracle and Amazon are big IT itCompanies.
console.log(`${itCompanies} are big IT itCompanies`);

// Check if a certain company exists in the itCompanies array.
//If it exist return the company else return a company is not found
console.log(itCompanies.includes("Facebook"));
itCompanies.includes("Facebook")
  ? console.log("Facebook")
  : console.log("Company is not found");

// Filter out itCompanies which have more than one 'o' without the filter method
let newCompany = itCompanies.slice(2);
console.log(newCompany);

// Sort the array using sort() method
let sortCompany = itCompanies.sort();
console.log(sortCompany);

// Reverse the array using reverse() method
console.log(sortCompany.reverse());

// Slice out the first 3 itCompanies from the array
let slice1 = itCompanies.slice(0, 3);
console.log(slice1);

// Slice out the last 3 itCompanies from the array
let slice2 = itCompanies.slice(4);
console.log(slice2);

// Slice out the middle IT company or itCompanies from the array
let slice3 = itCompanies.slice(3, 4);
console.log(slice3);

// Remove the first IT company from the array
let remove1 = itCompanies.shift();
console.log(remove1);
console.log(itCompanies);

// Remove the middle IT company or itCompanies from the array
let removeMiddle = itCompanies.splice(2, 1);
console.log(removeMiddle);

// Remove the last IT company from the array
let removeLast = itCompanies.pop();
console.log(removeLast);

// Remove all IT itCompanies
let removeAll = itCompanies.splice();
console.log(removeAll);

// Exercise: Level 2
// Create a separate countries.js file and store the countries
//array in to this file, create a separate file web_techs.js and
// store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to
//array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.match(/[a-z]+/gi);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes("Meat")) {
  console.log(shoppingCart);
} else {
  shoppingCart.unshift("Meat");
}

console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Sugar")
  ? console.log(shoppingCart)
  : shoppingCart.push("Sugar");
//console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
let me = "I am not allergic to honey";
me == "I am allergic to honey"
  ? shoppingCart.splice(4, 1)
  : console.log("I am not allergic to honey");
//console.log(shoppingCart)

// modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.push("Ethiopia");
//console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push("Sass");
console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3
// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(ages);
let minAge = ages[0];
console.log(minAge);
let ageLength = ages.length - 1;
let maxAge = (ages[ageLength])
console.log(maxAge);

// Find the median age(one middle item or two middle items divided by two)
let medianAge = (ages[5] + ages[6]) / 2;
console.log(medianAge);

// Find the average age(all items divided by number of items)
let averageAge =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  ages.length;
console.log(averageAge);

// Find the range of the ages(max minus min)
let ageRange = maxAge - minAge
console.log(ageRange);

// Compare the value of (min - average) and (max - average), use abs() method 
//1.Slice the first ten countries from the countries array
let diff1 = Math.abs(minAge - maxAge)
console.log(diff1)
let diff2 = Math.abs(maxAge - averageAge)
console.log (diff2)
console.log(diff1 > diff2)

let slicedCountries = countries.slice(0, 10)
console.log(slicedCountries)

// Find the middle country(ies) in the countries array
let middleCountry = countries[5]
console.log(middleCountry)

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = countries.slice(0, 6)
console.log(countries1)
let countries2 = countries.slice(6)
console.log(countries2)