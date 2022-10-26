// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and
//assign value to it and use the typeof operator to check different data types.
let firstName = "Charles";
let lastName = "Luther";
let country = "Canada";
let city = "Toronto";
let hisage = 43;
let isMarried = true;
let year = 2003;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof "Canada");
console.log(typeof city);
console.log(typeof hisage);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
let statement1 = "The day is bright";
let statement2 = "20th of October 2020";
let statement3 = 2300949845;

// Write three JavaScript statement which provide falsy value.
let fstatement1 = "";
let fstatement2 = false;
let fstatement3 = null;

// Figure out the result of the following comparison expression first without
//using console.log(). After you decide the result confirm it using console.log()
4 > 3; //true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 != 4; //false
4 !== 4; //false
4 != "4"; //false
4 == "4"; //true
4 === "4"; //false

// Find the length of python and jargon and make a falsy comparison statement.
let lang1 = "python";
let length1 = lang1.length;
let lang2 = "jargon";
let length2 = lang2.length;
console.log(length1 < length2);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!false; //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === "4"); //true
("There is no 'on' in both dragon and python"); // false
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
//There is no 'on' in both dragon and python
let animal1 = "dragon";
let animal2 = "python";
console.log(!(animal1.includes("on") && animal2.includes("on")));

// Use the Date object to do the following activities
// What is the year today?
const today = new Date();
console.log(today.getFullYear());

// What is the month today as a number?
console.log(today.getMonth() + 1);

// What is the date today?
console.log(today);

// What is the day today as a number?
console.log(today.getDate());

// What is the hours now?
console.log(today.getHours());

// What is the minutes now?
console.log(today.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(today.getTime());

// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle
//and calculate an area of a triangle (area = 0.5 x b x h).

let b = prompt('Enter base')
let h = prompt('Enter height')
console.log(0.5 * b * h)

// Write a script that prompt the user to enter side a, side b, and side c
//of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt('Enter side A value')
let sideB = prompt('Enter side B value')
let sideC = prompt('Enter side C value')
let total = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
console.log("The perimeter of the triangle is " + total)

// Get length and width using prompt and calculate an area of rectangle
//(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter lenght")
let width = prompt("Enter width")
let l = prompt('Enter length')
let w = prompt('Enter width')
let area = (l * w)
let peri = parseInt(l) + parseInt(w)
console.log(area)
console.log (2 * peri)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 let r = prompt('enter radius')
let pi = 3.14
let areaOfCircle = pi * r ** 2
let circumferenceOfCircle = 2 * pi * r
console.log(areaOfCircle)
console.log(circumferenceOfCircle)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
//y = mx + c
let m = 2; //=slope
let yIntercept = (c = -2);
let xIntercept = -(c / m);
console.log(xIntercept);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 2;
let y2 = 10;
let x1 = 2;
let x2 = 6;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);
// Compare the slope of above two questions.
//By comparison,
m == slope2;

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and
//figure out at what x value y is 0.
let x = -3;
let y = x ** 2 + 6 * x + 9;
console.log(y);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay
//of the person?

let hrs = prompt('enter hours')
let rph = prompt('enter rph')
let pay = console.log('Your weekly earning is ' + hrs * rph)

// If the length of your name is greater than 7 say, your name is long else say your
//name is short.
let myName = "Oluwatoyin";
myName.length > 7
  ? console.log("My name is long")
  : console.log("My name is short.");

// Compare your first name length and your family name length and you should get this
//output.
let fName = "Oluwatoyin";
let lName = "Jolaoso";
fName.length > lName.length
  ? console.log(
      "Your first name, " + fName + " is longer than your family name, " + lName
    )
  : console.log(
      "Your first name, " + fName + "is shorter than your family name, " + lName
    );

// Declare two variables myAge and yourAge and assign them initial values and myAge
//and yourAge.
let myAge = 55;
let yourAge = 29;
myAge > yourAge
  ? console.log("I am " + (myAge - yourAge) + " years older than you.")
  : console.log("I am " + (yourAge - myAge) + " years younger than you.");

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = new Date();
const userAge = birthYear.getFullYear();
console.log(userAge);
userAge >= 18
  ? console.log(`You are  + ${userAge}. + You are old enough to drive`)
  : console.log("You can't drive");

// Write a script that prompt the user to enter number of years. Calculate the number
//of seconds a person can live. Assume some one lives just hundred years

let numOfYears = 1996; //prompt('Enter number of years')
numOfYears = new Date();
console.log(numOfYears.getFullYear());

// Create a human readable time format using the Date time object
let curTime = new Date();
const year1 = curTime.getFullYear();
const month = curTime.getMonth() + 1;
const date = curTime.getDate();
const hours = curTime.getHours();
const minutes = curTime.getMinutes();

//YYYY - MM - DD HH: mm
console.log(`${year1} - ${month} - ${date} ${hours}:${minutes}`);
//DD - MM - YYYY HH: mm
console.log(`${date} - ${month} - ${year} ${hours}:${minutes}`);
//DD / MM / YYYY HH: mm
console.log(`${date} / ${month} / ${year} ${hours}:${minutes}`);

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(`${year} - ${month} - ${date} ${hours}:${minutes}`);
