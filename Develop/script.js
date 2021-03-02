// Assignment code here
//global references

//random selectors of letters/characters
var randomLetter = function (){
  var value = Math.floor(Math.random()*26+1);
  return value;
}

var randomCharacter =function (){
  var value = Math.floor(Math.random()*7+1);
  return value;
}

// arrays holding values for password
var lowerAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charArray = ['!','@','#','$','%','&','*'];
 console.log(upperAlphabetArray[3]);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    debugger;
    //Validation of choices
    var passwordLength = userPasswordLengthInput() 
    var passwordCharacters = userPasswordCharacterInput ()
    var passwordUpper = userPasswordUpperInput ()
    var passwordLower = userPasswordLowerInput ()
    var passwordNumeric = userPasswordNumericInput ()
    // function to determine characteristics of password 
      function userPasswordLengthInput (){
        
        var desiredLength = window.prompt ("How many digits does your password require?");
          desiredLength = parseInt(desiredLength);
        
        if (desiredLength >= 1 && desiredLength <= 128) {
          return desiredLength;
        } else {
          window.alert ("Try again");
          return userPasswordLengthInput();
        }
      } 
      
      function userPasswordCharacterInput () {
        
        var wantsCharacters = window.confirm ("Do you want special characters?");
        if (wantsCharacters) {
          return true;
        }
      }

      function userPasswordUpperInput () {
        var wantsUpper = window.confirm ("Do you want special characters?");
        if (wantsUpper) {
          return true; 
        } 
      }

      function userPasswordLowerInput () {
        var wantsLower = window.confirm ("Do you want lowercase characters?")
        if (wantsLower) {
          return true;
        }
      }

      function userPasswordNumericInput () {
        var wantsNumbers = window.confirm ("Do you want numeric characters?")
        if (wantsNumbers) {
          return true;
        }
      }

    var generatePassword = function () {
      
      var passwordHolder = [];
    
      for (var i = 0; i < passwordLength; i++){
        passwordHolder[i]=lowerAlphabetArray[randomLetter()];
      }

      // Turn passwordHolder into a string
      var passwordToString = passwordHolder.join('');
      return passwordToString;
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password"); 





  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


