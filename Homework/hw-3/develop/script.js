// Assignment Code
var generateBtn = document.querySelector("#generate");

  // password values
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];
var cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",
"<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var lowLength = low.length;
console.log(lowLength);

var capLength = cap.length;
console.log(capLength);

var numLength = num.length;
console.log(numLength);

var charLength = char.length;
console.log(charLength);


var length = prompt("Enter desired password length: 8 - 128 characters", length);
if (length < 8 || length > 128) {
  alert("Enter a valid length.")
  location.reload();
} else if (length > 8 && length < 128) {
  console.log(length)
  var lower = confirm("Would you like to include lowercase letters?");
  var upper = confirm("Would you like to include uppercase letters?");
  var num = confirm("Would you like to include numbers?");
  var specialcharacter = confirm("Would you like to include special characters?");
};
if (!lower && !upper && !num && !specialchar) {
  alert("You did not select any password criteria! Try again.")
  location.reload();
} else if (lower | upper | num | specialchar) {
    password = generatePassword();
}

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var complexity = length.value;

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
