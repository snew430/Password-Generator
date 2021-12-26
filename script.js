// Assignment code here

// ======ARRAYS BEGIN=========

// UPPERCASE ARRAY
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// LOWERCASE ARRAY
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];

// NUMBER ARRAY
const number = ["0123456789"];

// SPECIAL CHARACTER ARRAY
const specChar = ["!@#$%&?"];

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
var finalArray = function () {
  var upCasePass = confirm("Would you like to include upper case letters?");
  var lowCasePass = confirm("Would you like to include lower case letters?");
  var numPass = confirm("Would you like to include numbers?");
  var specPass = confirm("Would you like to include special characters?");

  // User must choose at lease one option
  if (!upCasePass && !lowCasePass && !numPass && !specPass) {
    alert("You must choose at least one type of character");
    initAsk();
  }

  var userChoices = {
    upCasePass: upCasePass,
    lowCasePass: lowCasePass,
    numPass: numPass,
    specPass: specPass,
  };

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
  var finalArray = "";
  var pass = "";

  // Builds all elements the user asked for in a large array
  if (y.upCasePass) {
    finalArray = finalArray + uppercase;
  }
  if (y.lowCasePass) {
    finalArray = finalArray + lowercase;
  }
  if (y.numPass) {
    finalArray = finalArray + number;
  }
  if (y.specPass) {
    finalArray = finalArray + specChar;
  }

  // Generates how many characters the user asked for
  for (i = 0; i < x; i++) {
    pass = pass + randomValue(finalArray);
  }

  // Makes sure at least on element is in the password
  if (y.upCasePass) {
    hasElements(uppercase, pass);
    if (hasElements === false) {
      generatePassword();
    }
  }
  if (y.lowCasePass) {
    hasElements(lowercase, pass);
    if (hasElements === false) {
      generatePassword();
    }
  }
  if (y.numPass) {
    hasElements(number, pass);
    if (hasElements === false) {
      generatePassword();
    }
  }
  if (y.specPass) {
    hasElements(specChar, pass);
    if (hasElements === false) {
      generatePassword();
    }
  }
  return pass;
};


// Passes the final password to make sure it has at least one element the user asked for
var hasElements = function (ask, has) {
  for (i = 0; i < ask.length; i++) {
    for (j = 0; j < has.length; j++) {
      if (has[j] === ask[i]) {
        return true;
      }
    }
  }
};

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


// Click the button to start writePassword Function
generateBtn.addEventListener("click", writePassword);

