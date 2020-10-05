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

function generatePassword() {
  // determining password length
  var length = prompt("Enter desired password length: 8 - 128 characters");

  if (length < 8 || length > 128) {
    alert("Enter a valid length.");

  } else if (length > 7 && length < 129) {
    console.log(length);

    // continues with criteria questions
    var includeLow = confirm("Would you like to include lowercase letters?");
    var includeCap = confirm("Would you like to include uppercase letters?");
    var includeNum = confirm("Would you like to include numbers?");
    var includeChar = confirm("Would you like to include special characters?");
  };

  var options;
  // no criteria was chosen
  if (!includeLow && !includeCap && !includeNum && !includeChar) {
    options = alert("You did not select any password criteria! Try again.")
    location.reload();

    // all 4 criteria chosen
  } else if (includeLow && includeCap && includeNum && includeChar) {
    options = low.concat(cap, num, char);

    // 3 criteria chosen
  }else if (includeLow && includeCap && includeNum) {
    options = low.concat(cap, num);

  }else if (includeLow && includeCap && includeChar) {
    options = low.concat(cap, char);

  }else if (includeLow && includeNum && includeChar) {
    options = low.concat(num, char);

  }else if (includeCap && includeNum && includeChar) {
    options = cap.concat(num, char);
  
  // 2 criteria chosen
  }else if (includeLow && includeCap) {
    options = low.concat(cap);
  
  }else if (includeLow && includeNum) {
    options = low.concat(num);
  
  }else if (includeLow && includeChar) {
    options = low.concat(char);

  }else if (includeCap && includeNum) {
    options = cap.concat(num);

  }else if (includeCap && includeChar) {
    options = cap.concat(char);

  }else if (includeNum && includeChar) {
    options = num.concat(char);

    // 1 criteria chosen
  }else if (includeLow) {
    options = low;

  }else if (includeCap) {
    options = cap;

  }else if (includeNum) {
    options = num;

  }else if (includeChar) {
    options = char;
  };


  // randomizes options
  for (var i = 0; i < length; i++) {
    password = options[Math.floor(Math.random() * options.length)];
    console.log(password);
  }

  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
