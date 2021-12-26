// Assignment code here

// ======ARRAYS BEGIN=========

// UPPERCASE ARRAY
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];

// LOWERCASE ARRAY
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];

// NUMBER ARRAY
const number = ["0123456789"];

// SPECIAL CHARACTER ARRAY
const specChar = ["!@#$%&?"];

// ==========ARRAYS END=========


// Length of the password
var passLength = function() {
  //   made passLength into an integer "nine" changed to "9"
  var passLength = parseInt(
    prompt(
      "How long would you like your password to be? Please enter a number between 8 and 128."
    )
  );

  // Answer needs to be a number
  if (isNaN(passLength) === true) {
    alert("Please enter a number");
    passLength();
  }
  // make sure the password is the proper length
  if (passLength < 8 || passLength > 128) {
    // if not the proper length, ask again
    alert(
      "Your password must be between 8 and 128 characters.  Please choose again..."
    );
    passLength();
  }
  console.log(passLength);
  return passLength;
}

// What items will be in entire array
var finalArray = function() {
  finalArray = "";
  var upCasePass = confirm("Would you like to include upper case letters?");
  if (upCasePass){
    finalArray = (finalArray + uppercase);
  }
  var lowCasePass = confirm("Would you like to include lower case letters?");
  if (lowCasePass){
    finalArray = (finalArray + lowercase);
  }
  var numPass = confirm("Would you like to include numbers?");
  if (numPass){
    finalArray = (finalArray + number);
  }
  var specPass = confirm("Would you like to include special characters?");
  if (specPass){
    finalArray = (finalArray + specChar);
  }

  if (!upCasePass && !lowCasePass && !numPass && !specPass) {
    alert("You must choose at least one type of character");
    initAsk();
  }
  var userChoices = {
    upCasePass: upCasePass,
    lowCasePass: lowCasePass,
    numPass: numPass,
    specPass: specPass,
  }
  return userChoices;
}


// RANDOM VALUE FOR ARRAYS
var randomValue = function(arr) {
  var indexNumber = Math.floor(Math.random() * arr.length);
  var indexContent = arr[indexNumber];
  return indexContent;
}

// Generate the random password
var generatePassword = function(x, y) {
  var pass = ""
  for (i = 0; i < x; i++) {
    pass = pass + randomValue(y)
  }
  return pass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var x = passLength();
  var passArray = finalArray();
  var password = generatePassword(x, passArray);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// var sean = "sean"
// if (sean.includes("s")) {
//   console.log(true)
// }else {
//   console.log(false)
// }

generateBtn.addEventListener("click", writePassword);


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
