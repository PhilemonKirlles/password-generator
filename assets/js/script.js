// Assignment code here
const length = document.getElementById ("length")
const numbers = document.getElementById ("numbers")
const form = document.getElementById ("stopDefultValue")

length.addEventListener('input', syncLength)

form.addEventListener ('submit', e => {e.preventDefault()
  const password = generatePassword (length,numbers,uppercase,lowercase, Symbols)
})

// length value function
function syncLength(e) {
  const value = e.target.value = value
  length.value = value
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
