// Assignment code here
//global references

//random selectors of letters/characters
var randomLetter = function (){
  var value = Math.floor(Math.random()*26+1);
  return value;
}

var randomCharacter =function (){
  var value = Math.floor(Math.random()*6+1);
  return value;
}

var randomNumeric = function () {
  var value = Math.floor(Math.random()*9+1);
  return value;
}

// rock paper scissors lizard spock ;)
var lizardSpock = function () {
  var value = Math.floor(Math.random()*4+1);
  return value;
}
// validation of user choices

// arrays holding values for password
var lowerAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charArray = ['!','@','#','$','%','&','*'];
// object to call for user choice

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generatePassword = function () {
    var userPasswordLengthInput = function (){
        
      var desiredLength = window.prompt ("How many digits does your password require?");
        desiredLength = parseInt(desiredLength);
      
      if (desiredLength >= 1 && desiredLength <= 128) {
        return desiredLength;
      } else {
        window.alert ("Try again");
        return userPasswordLengthInput();
      }
    } 
    var passwordHolder = [];
    debugger;
      var wantsCharacters = window.confirm ("Do you want special characters?");
        if (wantsCharacters) {passwordHolder.push (charArray[randomCharacter()])};
      var wantsUpper = window.confirm ("Do you want special characters?");
        if (wantsUpper) {passwordHolder.push (upperAlphabetArray[randomCharacter()])};
      var wantsLower = window.confirm ("Do you want lowercase characters?")
        if (wantsLower) {passwordHolder.push (lowerAlphabetArray[randomCharacter()])};
      var wantsNumbers = window.confirm ("Do you want numeric characters?")
        if (wantsNumbers) {passwordHolder.push (randomNumeric())}
      console.log(passwordHolder)

      var userChoice ={
        length: userPasswordLengthInput(),
        characters: wantsCharacters,
        upper: wantsUpper,
        lower: wantsLower,
        numeric: wantsNumbers,
      }
   
    // debugger;
    
    if (userChoice.characters === true || userChoice.length === true || userChoice.upper === true ||userChoice.lower === true) {
      var choiceValidate = true;
     } else {choiceValidate = false;}
    
      
    

    //for iteration of password length

    if (choiceValidate){
      for (var i = passwordHolder.length + 1; i < userChoice.length; i++){
        // debugger;
        passwordHolder[i]=switcherFunction(lizardSpock());
      }
    } else {
      window.alert("You must choose at least one option");
      generatePassword();}

      var switcherFunction = lizardSpock();
      //switcher for inputs
      switch (switcherFunction) {
        case 1:
          if (userChoice.characters){
            return charArray[randomCharacter()];
          } 
        case 2: 
          if (userChoice.upper) {
            return upperAlphabetArray[randomLetter()];
          } 
        case 3: 
          if (userChoice.lower) {
            return lowerAlphabetArray[randomLetter()];
          } 
        case 4:
          if (userChoice.numeric){
            return randomNumeric()
          }
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


