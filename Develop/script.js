// Assignment code here
//global references
var passwordLength = userPasswordInput() 

function userPasswordInput (){
  debugger;
  var desiredLength = window.prompt ("How many digits does your password require?");
  desiredLength = parseInt(desiredLength);
  
  if (desiredLength <= 8 || desiredLength >= 128) {
    window.alert ("Try again");
  return userPasswordInput();
  } else {
    return desiredLength;
  }
}

// arrays holding values for password
var lowerAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperAlphabetArray = lowerAlphabetArray[3].toUpperCase();

var charArray = ['!','@','#','$','%','&','*']


console.log(userPasswordLength);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 





  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

userPasswordLength();
