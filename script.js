// Assignment code here

// GIVEN I need a new, secure password
var specialCharacters = ["!","?","-","+","&","$","^","_",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
var passwordLength = 8;
var choicesArray =[];

// WHEN I click the button to generate a password
function generatePassword() {

var passwordLength = generatePasswordLength();

// THEN I am presented with a series of prompts for password criteria
function getPrompts() {
    generatePasswordLength = (window.prompt("How many characters do you want your generated password to include? 8-128 max characters"));
}

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
