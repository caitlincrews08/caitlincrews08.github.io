// Assignment Code
var generateBtn = document.querySelector("#generate");

  // password values
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var specialchar = (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~") 



var length = prompt("Enter desired password length: 8 - 128 characters", length);
if (length < 8 || length > 128) {
  alert("Enter a valid length.")
  location.reload();
} else if (length > 8 && length < 128) {
  console.log(length)
  var lower = confirm("Would you like to include lowercase letters?");
  var upper = confirm("Would you like to include uppercase letters?");
  var num = confirm("Would you like to include numbers?");
  var specialchar = confirm("Would you like to include special characters?");
};


if (!lower && !upper && !num && !specialchar) {
  alert("You did not select any password criteria! Try again.")
  location.reload();
} else if (lower === true) {
    password = generatePassword(Math.floor(Math.random(alphaLow)));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
