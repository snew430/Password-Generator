// Assignment code here

// ======ARRAYS BEGIN=========

// UPPERCASE ARRAY
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// LOWERCASE ARRAY
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// NUMBER ARRAY
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// SPECIAL CHARACTER ARRAY
const specChar = ["!", "@", "#", "$", "%", "&", "*", "?"];

// ==========ARRAYS END=========


// INITIAL ASK FUNCTION
function initAsk() {
  //   made passLength into an integer "nine" changed to "9"
  var passLength = parseInt(
    prompt(
      "How long would you like your password to be? Please enter a number between 8 and 128."
    )
  );

  // Answer needs to be a number
  if (isNaN(passLength) === true) {
    alert("Please enter a number");
    initAsk();
  }
  // make sure the password is the proper length
  if (passLength < 8 || passLength > 128) {
    // if not the proper length, ask again
    alert(
      "Your password must be between 8 and 128 characters.  Please choose again..."
    );
    initAsk();
  }

  var upCasePass = confirm("Would you like to include upper case letters?");
  var lowCasePass = confirm("Would you like to include lower case letters?");
  var numPass = confirm("Would you like to include numbers?");
  var specPass = confirm("Would you like to include special characters?");

  if (!upCasePass && !lowCasePass && !numPass && !specPass) {
    alert("You must choose at least one type of character");
    initAsk();
  }

  var userChoices = {
    passLength: passLength,
    upCasePass: upCasePass,
    lowCasePass: lowCasePass,
    numPass: numPass,
    specPass: specPass,
  };
  console.log(userChoices);
  return userChoices;
}

// RANDOM VALUE FOR ARRAYS
function randomValue(arr) {
  var indexNumber = Math.floor(Math.random() * arr.length);
  var indexContent = arr[indexNumber];
  return indexContent;
}

console.log(uppercase + lowercase + number + specChar);
var password = (uppercase + lowercase + number + specChar);
console.log(password[i])

// for (i = 1; i < passLength; i++) {
  
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", initAsk);

//
//
//
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
