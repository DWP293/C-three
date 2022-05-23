

// Assignment code here

var characterlength = 8;
var choice = [];

var specialcharspace = ['!', '$', '&', '+', '<', '>', '?', '[', ']', '~', '/' ];
var lowercasespace = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasespace =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberspace= ['1','2','3','4','5','6','7','8','9','0'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var fixPrompts = getPrompts(); //true or false
var passwordText = document.querySelector("#password");

  if(fixPrompts) {
var password2 = generatePassword();
  passwordText.value = password2;
  } else {

  passwordText.value = "";
  }

  

}

function generatePassword() {
//generatepassword based on prompts

var password = "";
for(var i = 0; i < characterlength; i++) {
  var randomchoice = Math.floor(Math.random() * choice.length);
  password = password + choice[randomchoice];
}
return password;
}

function getPrompts() {
  choice = [];

 characterlength = parseInt(prompt("How many characters? 8 - 25 characters"));

 if(isNaN(characterlength) || characterlength < 8 || characterlength > 25) {
   alert("Character length has to be in number form");
   return false;
 }

 if (confirm("Would you like lowercase letters?")) {
 choice = choice.concat(lowercasespace);
 }
 if (confirm("Would you like uppercase letters?")) {
  choice = choice.concat(uppercasespace);
  }
  if (confirm("Would you like special characters?")) {
    choice = choice.concat(specialcharspace);
    }
    if (confirm("Would you like numbers?")) {
      choice = choice.concat(numberspace);
      }
      return true;
}