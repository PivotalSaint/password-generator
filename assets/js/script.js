// Assignment code here

// GIVEN I need a new, secure password
// These are my variables
var specialCharacters = ["!","@","*",")","(","%","?","-","+","&","$","^","_"]; //
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //26 total
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //26 total
var numbers = ["0","1","2","3","4","5","6","7","8","9"]; // 10 total
var totalCharacters = [70]
var userChoice = []
// Get references to the #generate element
// This is coming from the generate id in html and attaches the generate button to the java
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var generateBtn = document.querySelector("#generate");


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword() {
    var userChoice = window.prompt("How many characters do you want generated password to be? 8-128 max characters.");
    
    var generatePasswordLength = parseInt(userChoice);

    // WHEN prompted for the length of the password
    if (isNaN(generatePasswordLength)) {
        window.alert("Please enter a numerical value between 8-128 characters")
        return
    }

    if ((generatePasswordLength) < 8 || (generatePasswordLength) > 128) {
        window.alert("Please choose between 8-128 max characters")
        return
    }

    if ((generatePasswordLength) > 8 || (generatePasswordLength) < 128) {
        userChoice = userChoice.concat(generatePasswordLength);
    
    }


// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// so I need to add my variable I created 
if (generatePasswordLength = true)
    var userChoice = window.prompt("How many special characters would you like in your password? 0-8 max characters");

    var generateSpecialCharacters = parseInt(userChoice);

    if (isNaN(generateSpecialCharacters)) {
        window.alert("Please enter a numerical value between 0-8 characters")
        return
    }
        if ((generateSpecialCharacters) > 8) {
            window.alert ("Please enter a number between 0 and 8. Thank You.")
            return
        }
    if ((generateSpecialCharacters) = 0 || (generateSpecialCharacters) < 8) {
        userChoice = userChoice.concat(specialCharacters);
    }
}
    //
    console.log("what happens after this")

// Write password to the #password input
// this is going to the id tag in html password, this should be the last thing to go back to code sourcing after all functions run
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
