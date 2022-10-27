

var specialCharacters = "!@#$%&*+=()/|?";
var letterLowerCase = "abcdefghijklmnopqrstuvwxyz"
var letterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var chosenCharacters = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //howLong takes users' input on length of password
  var howLong = prompt("How long of a password would you like? \nPlease type a number between 8 and 128 \n(1, 2, or 3, not one two or three)");
  console.log(howLong)

  //fail state if click cancel
  if (howLong == null) {
      return "Well, bye then."};

  //fail state being between 8 and 128 and if not a number    
  if (howLong < 8 || howLong > 128 || isNaN(howLong)) {
    alert("Password must be between 8 and 128 characters and be a number. \nPlease try again.");
    return "Try again."} 

  //double checks password length
  if (!confirm("Password will be " + howLong + " characters long. Is that correct?")){ 
        return generatePassword() }

  //confirm lower case
  var includeLc = confirm("Great! Would you like to use lower case letters in this password?" );
  console.log("includeLc = ", includeLc);
  if (includeLc === true) {
      chosenCharacters += letterLowerCase;}
  console.log("chosenCharacters = ", chosenCharacters);
  
  //confrim upper case
    var includeUc = confirm("Great! Would you like to use upper case letters in this password?" );

    console.log("includeUc = ", includeUc);
    
    if (includeUc === true) {
      chosenCharacters += letterUpperCase;}
    
      console.log("chosenCharacters = ", chosenCharacters);
    
      //confrim numbers
    var includeNmb = confirm("Great! Would you like to use numbers in this password?" );
    
    console.log("includeNmb = ", includeNmb);
    
    if (includeNmb === true) {
      chosenCharacters += numeric;}    
    
      console.log("chosenCharacters = ", chosenCharacters);
    
      //confrim special characters
    var includeSpc = confirm("Great! Would you like to use special characters in this password?" );
    
    console.log("includeSpc = ", includeSpc);
    
    if (includeSpc === true) {
      chosenCharacters += specialCharacters;}    
    
      console.log("chosenCharacters = ", chosenCharacters);
      //Make sure at lest one character set was chosen
      if (chosenCharacters.length  === 0){
        alert("You password must include at least one type of characters to be generated.");
        return;}
      
      //password variables
      var passkey = "" ;
      var randomindex = 0;
      console.log("chosenCharacters length is ", chosenCharacters.length);
      //generates the password
      for (var i = 0; i < howLong; i++) {
        randomindex = Math.floor(Math.random() * chosenCharacters.length)
        passkey += chosenCharacters[randomindex]
        console.log("passkey", passkey);}
      return passkey;
 
      }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

