// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// generate password function
function generatePassword() {
  // criteria prompts
  var length = 0;

  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(
      prompt(
        "How many characters would you like your password to be? (between 8 and 128)"
      )
    );
  }

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

  let password = "";

  let passwordOptions = "";

  if (lowercaseConfirm) {
    password += randomiser(lowercase);
    passwordOptions += lowercase;
  }
  if (uppercaseConfirm) {
    password += randomiser(uppercase);
    passwordOptions += uppercase;
  }
  if (numbersConfirm) {
    password += randomiser(numbers);
    passwordOptions += numbers;
  }
  if (charactersConfirm) {
    password += randomiser(characters);
    passwordOptions += characters;
  }

  for (let i = password.length; i < length; i++) {
    password += randomiser(passwordOptions);
  }

  return password;
}

// randomiser

function randomiser(str) {
  return str[Math.floor(Math.random() * str.length)];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
