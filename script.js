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
const specChar = ["!", "@", "#", "$", "%", "&", "?"];

// ==========ARRAYS END=========

// LENGTH OF PASSWORD
var passLength = function () {
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
  return passLength;
};

// WHAT ELEMENTS WILL BE IN PASSWORD
var userChoices = function () {
  var upCasePass = confirm("Would you like to include upper case letters?");
  var lowCasePass = confirm("Would you like to include lower case letters?");
  var numPass = confirm("Would you like to include numbers?");
  var specPass = confirm("Would you like to include special characters?");

  // User must choose at lease one option
  if (!upCasePass && !lowCasePass && !numPass && !specPass) {
    alert("You must choose at least one type of character");
    userChoices();
  }

  var userChoices = {
    upCasePass: upCasePass,
    lowCasePass: lowCasePass,
    numPass: numPass,
    specPass: specPass,
  };
  console.log(userChoices);

  // Return the user choices
  return userChoices;
};

// RANDOM VALUE FOR ARRAYS
var randomValue = function (arr) {
  var indexNumber = Math.floor(Math.random() * arr.length);
  var indexContent = arr[indexNumber];
  return indexContent;
};

// Generate the random password
var generatePassword = function (x, y) {
  var allElements = "";
  var pass = "";

  // Builds all elements the user asked for in a large array
  if (y.upCasePass) {
    allElements = allElements + uppercase.join("");
  }
  if (y.lowCasePass) {
    allElements = allElements + lowercase.join("");
  }
  if (y.numPass) {
    allElements = allElements + number.join("");
  }
  if (y.specPass) {
    allElements = allElements + specChar.join("");
  }

  console.log(allElements);

  // Generates how many characters the user asked for
  for (i = 0; i < x; i++) {
    pass = pass + randomValue(allElements);
  }

  // Makes sure at least on element is in the password
  if (y.upCasePass) {
    var elementCondition = false;
    elementCondition = hasElements(uppercase, pass);
    console.log(elementCondition);
    if (elementCondition === false) {
      generatePassword(x, y);
    }
  }
  if (y.lowCasePass) {
    elementCondition = false;
    elementCondition = hasElements(lowercase, pass);
    console.log(elementCondition);
    if (elementCondition === false) {
      generatePassword(x, y);
    }
  }
  if (y.numPass) {
    elementCondition = false;
    elementCondition = hasElements(number, pass);
    console.log(elementCondition);
    if (elementCondition === false) {
      generatePassword(x, y);
    }
  }
  if (y.specPass) {
    elementCondition = false;
    elementCondition = hasElements(specChar, pass);
    console.log(elementCondition);
    if (elementCondition === false) {
      generatePassword(x, y);
    }
  }
  return pass;
};

// Passes the final password to make sure it has at least one element the user asked for
var hasElements = function (ask, has) {
  for (i = 0; i < has.length; i++) {
    for (j = 0; j < ask.length; j++) {
      console.log(has[i] + " XXX " + ask[j]);
      if (has[i] === ask[j]) {
        console.log(has[i] + " === " + ask[j]);
        return true;
      } else if (
        has[i] === has[has.length - 1] &&
        ask[j] === ask[ask.length - 1]
      ) {
        return false;
      }
    }
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var x = passLength();
  var passArray = userChoices();
  var password = generatePassword(x, passArray);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Click the button to start writePassword Function
generateBtn.addEventListener("click", writePassword);
