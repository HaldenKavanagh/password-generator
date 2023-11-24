// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var character = prompt(
    "how many characters would you like your password to be? (between 8 and 120)"
  );
  let password = "";
  let str = "abcdefghijklmnopqrstuvwxyx";

  for (let i = 0; i < character; i++) {
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
