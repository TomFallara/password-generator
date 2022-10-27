

var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "+", "=", "(", ")", "/", "|", "?"]
var letterLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letterUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [1,2,3,4,5,6,7,8,9,0]
var answers = []

console.log()

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //howLong takes users' input on length of password
  var howLong = prompt("How long of a password would you like? \nMust be between 8 and 128 characters");
  console.log(howLong)
  //fail state being between 8 and 128
  if (howLong < 8 || howLong > 128) {
    alert("Password must be between 8 and 128 characters. \nPlease try again.");
    return;
  } 
  else {
    var lengthCorrect = confirm("Password will be " + howLong + " characters long. Is that correct?")
  }
  console.log(lengthCorrect)
    //confrim lower case
      var useLowerCase = confirm("Great! Would you like to use lower case letters in this password?" )
      console.log(useLowerCase)
    //confrim uppercase
      var useUpperCase = confirm("Alright, would you like to use upper case letters?") 
    console.log(useUpperCase)
    //confrim numeric
      var useNumeric = confirm("Cool, would you like to use numbers?") 
    console.log(useNumeric)
    //use special characters
      var useSpecial = confirm("And finally, would you like to use special characters in this password?") 
    console.log(useSpecial)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//length of more than 8, less than 128
//ask to include character types
//lowercase, uppercase, numeric, and/or sepcial characters
//as each prompt is answered, there should be validation at least one character type should be selected
//then a password is generated that matches selected criteria
//password is displayed in an alert or written on the page