// Assignment code here

// GIVEN I need a new, secure password
// These are my variables
var specialCharacters = ["!","@","*",")","(","%","?","-","+","&","$","^","_"]; // 13 total
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //26 total
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //26 total
var numbers = ["0","1","2","3","4","5","6","7","8","9"]; // 10 total
var totalCharacters = [password >8, password<128];
var writepassword = ["passwordSelected"];
var passwordSelected = ["generatePassword"]
var generatePassword = ["specialCharacters", "lowerCase", "upperCase", "numbers","totalCharacters"];
// Get references to the #generate element
// This is coming from the generate id in html and attaches the generate button to the java
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var generateBtn = document.querySelector("#generate");



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword() {
    var generatePasswordLength = window.prompt("How many characters do you want generated password to be? 8-128 max characters.");
    
    var generatePasswordLength = parseInt(generatePasswordLength);

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
    }


// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// so I need to add my variable I created 
if ((generatePasswordLength = true)) {
    var generateSpecialCharacters = window.prompt("How many special characters would you like in your password? 0-13 max characters");

    var generateSpecialCharacters = parseInt(generateSpecialCharacters);

    if (isNaN(generateSpecialCharacters)) {
        window.alert("Please enter a numerical value between 0-13 characters")
        return
        }
        if ((generateSpecialCharacters) > 13) {
            window.alert ("Please enter a numberical value between 0 and 13. Thank You.")
            return
        }
    if ((generateSpecialCharacters) < 13){
    }
    generateSpecialCharacters = generateSpecialCharacters.concat(generatePassword.specialCharacters);
    }
    //upper case beginning
    if  ((generateSpecialCharacters = true)) {
    var generateUpperCaseCharacters = window.prompt("Would you like to add upper case letters to your password? 0-26 max characters")
    
    var generateUpperCaseCharacters = parseInt(generateUpperCaseCharacters);

    if (isNaN(generateUpperCaseCharacters)) {
        window.alert("Please enter a numerical value between 0-26 characters")
        return
        }
        if ((generateUpperCaseCharacters) > 26) {
            window.alert ("Please enter a numerical value between 0 - 26. Thank You.")
            return
        }
    if ((generateUpperCaseCharacters) < 26) 
        generateUpperCaseCharacters = generateUpperCaseCharacters.concat(generatePassword.upperCase);
    }
    //lowercase beginning 
    if ((generateUpperCaseCharacters = true)) {
        var generateLowerCaseCharacters = window.prompt("Would you like to add lower case letters to your password? 0-26 max characters")
    
        var generateLowerCaseCharacters = parseInt(generateLowerCaseCharacters);

    if (isNaN(generateLowerCaseCharacters)) {
        window.alert("Please enter a numerical value between 0-26 characters")
        return
        }
        if ((generateLowerCaseCharacters) > 26) {
            window.alert ("Please enter a numerical value between 0 - 26. Thank You.")
            return
        }
    if ((generateLowerCaseCharacters) < 26) {
        userChoice = generateLowerCaseCharacters.concat(generatePassword.lowerCase);
        }
    }

    if ((generateLowerCaseCharacters = true)) {
        var generateNumbers = window.alert("You must add numbers to your password.")
        
        if ((generateNumbers)) {
            generateNumbers = generateNumbers.concat(generatePassword.numbers);
            }
        }


    //
    console.log("what happens after this")

// Write password to the #password input

    console.log((writePassword))
}

// this is going to the id tag in html password, this should be the last thing to go back to code sourcing after all functions run
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

    }

//I would like to add some styling to make the margin area around generate password has a different color than white

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
