// Assignment code here
//global references

//random selectors of letters/characters
var randomLetter = function (){
  var value = Math.floor(Math.random()*26);
  return value;
}

var randomCharacter =function (){
  var value = Math.floor(Math.random()*6);
  return value;
}

var randomNumeric = function () {
  var value = Math.floor(Math.random()*9);
  return value;
}

// arrays holding values for password
var lowerAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charArray = ['!','@','#','$','%','&','*'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var generatePassword = function () {
   
    // obtain value of length & turn input value to a number 
    var userPasswordLengthInput = function (){
      var desiredLength = window.prompt ("How many digits does your password require?");
        desiredLength = parseInt(desiredLength);
      
      //ensure correct value
      if (desiredLength >= 8 && desiredLength <= 128) {
        return desiredLength;
      } else {
        window.alert ("Try again, value must be between 8-128");
        return userPasswordLengthInput();
      }
    } 
    
    //initilize passwordHolder array so i can send values to it
    var passwordHolder = [];
    

    // confirm and to guarantee at least one iteration of each type selection
    var wantsCharacters = window.confirm ("Do you want special characters?");
      if (wantsCharacters) {passwordHolder.push (charArray[randomCharacter()])};
    var wantsUpper = window.confirm ("Do you want uppercase characters?");
      if (wantsUpper) {passwordHolder.push (upperAlphabetArray[randomLetter()])};
    var wantsLower = window.confirm ("Do you want lowercase characters?")
      if (wantsLower) {passwordHolder.push (lowerAlphabetArray[randomLetter()])};
    var wantsNumbers = window.confirm ("Do you want numeric characters?")
      if (wantsNumbers) {passwordHolder.push (randomNumeric())}
    

    //create userChoice object
    var userChoice ={
      length: userPasswordLengthInput(),
      characters: wantsCharacters,
      upper: wantsUpper,
      lower: wantsLower,
      numeric: wantsNumbers,
    }
      
    
    // check validity of user choices to include at least one type of character
 if (userChoice.characters === true || userChoice.length === true || userChoice.upper === true ||userChoice.lower === true) {
  window.alert("Password coming right up!")
} else  {
  window.alert("You must choose at least one type of character to generate a password");
  return generatePassword();
}

// workhorse of the generator. validates choice being true, iterates through random selection of inputs

  for (var i = passwordHolder.length ; i < userChoice.length; i++){
    
    // rock paper scissors lizard spock ;) <----creates a random number to insure the following values are random
    var lizardSpock = function () {
      var value = Math.floor(Math.random()*4+1);
      return value;
    }

    //initilizes the switcherFunction 
    var switcherFunction = lizardSpock();

    //switcher for inputs
    switch (switcherFunction) {
      case 1:
        if (userChoice.characters){
          passwordHolder.push(charArray[randomCharacter()]);
          break;
        } 
      case 2: 
        if (userChoice.upper) {
          passwordHolder.push(upperAlphabetArray[randomLetter()]);
          break;
        } 
      case 3: 
        if (userChoice.lower) {
          passwordHolder.push(lowerAlphabetArray[randomLetter()]);
          break;
        } 
      case 4:
        if (userChoice.numeric){
          passwordHolder.push(randomNumeric());
          break;
        }
      // to ensure that the i is subtracted in the case that it falls to the end due to false values and the loop continues
      default: 
        i = i-1;
      } 
  }
    //  debugger; 

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


