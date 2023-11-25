// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // criteria prompts

  var length = prompt(
    "How many characters would you like your password to be? (between 8 and 120)"
  );
  var lowercaseConfirm = confirm("Do you want to use lowercase letters?");
  var uppercaseConfirm = confirm(
    "Would you like to include uppercase letters?"
  );
  var numbersConfirm = confirm("Would you like to include numbers?");
  var charactersConfirm = confirm(
    "Would you like to include special charactors?"
  );

  // password variables

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var characters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // calls for correct criteria

  // final password generator

  let password = "";
  let str = "abcdefghijklmnopqrstuvwxyx";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    password += str.charAt(char);
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
