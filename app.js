// 21 - 25
// Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");

// Q2
// var favoritePhoneModel = prompt("What is your favorite mobile phone model?");
// var inputLength = favoritePhoneModel.length;

// document.write("The length of your favorite mobile phone model is: " + inputLength);

// Q3
// var word = "Pakistani";
// var index = word.indexOf("n");

// console.log("The index of letter 'n' in the word 'Pakistani' is: " + index);

// Q4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// console.log("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);

// Q5
// Define the word
// var word = "Pakistani";
// var character = word[3];

// console.log("The character at the 3rd index in the word 'Pakistani' is: " + character);

// Q6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome!");

// Q7
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");

// console.log("Original word: " + word);
// console.log("Word after replacement: " + newWord);

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.split("and").join("&");

// console.log("Original message: " + message);
// console.log("Message after replacement: " + newMessage);

// Q9
// var str = "472";
// var num = Number(str);

// console.log("Original string value: " + str + ", type: " + typeof str);
// console.log("Converted number value: " + num + ", type: " + typeof num);

// Q10
// var userInput = prompt("Enter your input:");
// var capitalizedInput = userInput.toUpperCase();

// console.log("Input in capital letters: " + capitalizedInput);

// Q11
// var userInput = prompt("Enter your input:");
// var words = userInput.split(" ");
// console.log(words)
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }

// var titleCaseInput = words.join(" ");

// console.log("Input in title case: " + titleCaseInput);

// Q12
// var num = 35.36;
// var numAsString = num.toString().replace(".", "");

// console.log("Number as string without dot: " + numAsString);

// Q13
// var username = prompt("Enter your username:");
// var specialSymbols = ['@', '.', ',', '!'];
// var containsSpecialSymbol = false;

// for (var i = 0; i < specialSymbols.length; i++) {
//     if (username.includes(specialSymbols[i])) {
//         containsSpecialSymbol = true;
//         break;
//     }
// }

// if (containsSpecialSymbol) {
//     alert("Username contains a special symbol. Please enter a valid username without '@', '.', ',', or '!' characters.");
// } else {
//     alert("Username is valid: " + username);
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search:");
// var found = false;
// var index = -1;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         index = i;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, '" + userInput + "' is found in the list at index " + index + ".");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

// Q15
// pending

// Q16
// var university = "University of Karachi";
// var universityArray = university.split("");

// document.write("Array elements:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// Q17
// var userInput = prompt("Enter your input:");
// var lastCharacter = userInput.slice(-1);

// console.log("The last character of the input is: " + lastCharacter);

// Q18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var lowercaseSentence = sentence.toLowerCase();
// var wordToSearch = "the";
// var words = lowercaseSentence.split(" ");
// var count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }

// console.log("Number of occurrences of the word 'the': " + count);


// x--------------------------------------------x----------------------------------------------x---------------------------------x


// Chapter 26 - 30

// Q1
// var userInput = +prompt("Enter a positive integer:");
// var number = (userInput);
// var roundOffValue = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.write("<h2>Number: " + number + "</h2>");
// document.write("<h2>Round off value: " + roundOffValue + "</h2>");
// document.write("<h2>Floor value: " + floorValue + "</h2>");
// document.write("<h2>Ceil value: " + ceilValue + "</h2>");

// Q2
// var userInput = prompt("Enter a negative floating-point number:");
// var number = parseFloat(userInput);
// var roundOffValue = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.write("<h2>Number: " + number + "</h2>");
// document.write("<h2>Round off value: " + roundOffValue + "</h2>");
// document.write("<h2>Floor value: " + floorValue + "</h2>");
// document.write("<h2>Ceil value: " + ceilValue + "</h2>");

// Q3
// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput);
// var absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is: " + absoluteValue);

// Q4
// var diceRandom = Math.random()
// var diceValue =  Math.floor(diceRandom * 6) + 1;
// document.write("<h2>The value of the dice is: " + diceValue + "</h2>");

// Q5
// var randomValue = Math.random();
// var coinValue = randomValue < 0.5 ? "Heads" : "Tails";

// document.write("The value of the coin is: " + coinValue);

// Q6
// var random = Math.random()
// var randomNumber = Math.floor(random * 100) + 1;

// document.write("Random number between 1 and 100: " + randomNumber);

// Q7
// var userInput = prompt("Enter your weight (in kilograms):");
// var weight = parseFloat(userInput);

// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kilograms");
// } else {
//     document.write("Invalid input! Please enter your weight in kilograms.");
// }

// Q8
// var secretRandom = Math.random()
// var secretNumber = Math.floor(secretRandom * 10) + 1;
// var userInput = prompt("Guess the secret number (between 1 and 10):");
// var guessedNumber = parseInt(userInput);

// if (guessedNumber === secretNumber) {
//     alert("Congratulations! You guessed the secret number!");
// } else {
//     alert("Sorry, the secret number was " + secretNumber + ". Try again next time!");
// }


// x--------------------------------------------x----------------------------------------------x---------------------------------x


// Chapter 31-34

// Q1
// var currentDateAndTime = new Date();

// document.write("Current date and time: " + currentDateAndTime);

// Q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var newDate = new Date()
// var currentMonthIndex = newDate.getMonth();
// var currentMonth = months[currentMonthIndex];

// alert("The current month is: " + currentMonth);

// Q3
// var currentDate = new Date();
// var currentDayNumber = currentDate.getDay();
// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var firstThreeLettersOfDay = daysOfWeek[currentDayNumber];

// alert("The first three letters of the current day are: " + firstThreeLettersOfDay);

// Q4
// var currentDate = new Date();
// var currentDayNumber = currentDate.getDay();

// if (currentDayNumber === 6 || currentDayNumber === 0) {
//     alert("It’s Fun day");
// }else {
//     alert("It’s not Fun day");
// }

// Q5
// var currentDate = new Date();
// var currentDayOfMonth = currentDate.getDate();

// if (currentDayOfMonth < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// Q6
// var currentDate = new Date();
// var millisecondsSince1970 = currentDate.getTime();
// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// document.write("Current Date:", currentDate +"<br>");
// document.write("Milliseconds since midnight, Jan. 1, 1970: ", millisecondsSince1970 +"<br>");
// document.write("Minutes since midnight, Jan. 1, 1970: ", minutesSince1970);

// Q7
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// console.log(currentHour);

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Q8
// var laterDate = new Date(2020, 9, 31);

// console.log("laterDate:", laterDate);

// Q9
// var ramadanStartDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days passed since 1st Ramadan 2015: " + daysPassed);

// Q10
// var referenceDate = new Date(0);
// console.log(referenceDate)
// var beginningOf2015 = new Date(2015, 0, 1);
// var secondsElapsed = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;

// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

// Q11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 3);
// console.log(currentHours)
// document.write("Date object an hour ahead: " + currentDate);

// Q12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 2024);

// alert("Date 2024 years back: " + currentDate);

// Q13
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);

// Q14
// var userName = prompt( "Please enter your name:" );
// var currentMonth = prompt( "Please enter the month" );
// var numberOfUnits = +prompt("How many units would you like to convert?");
// var chargesPerUnit = +prompt( "What are the charges per unit?" );
// var netAmountPayableWithIn = numberOfUnits * chargesPerUnit;
// var latePaymentCharges = parseFloat(prompt("Enter the late payment charges:"));
// var grossAmountPayable = netAmountPayableWithIn + latePaymentCharges;
// var dueDate = prompt("Enter the due date (YYY-MM-DD):");

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + userName + "</p>");
// document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayableWithIn.toFixed(2) + "</p>");
// document.write("<p><strong>Late Payment charge:</strong> " + latePaymentCharges.toFixed(2) + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable.toFixed(2) + "</p>");