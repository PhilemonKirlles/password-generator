// Assignment code here
function generate() {
  const length = document.getElementById("length");
  const numbers = document.getElementById("numbers");
  const uppercase = document.getElementById("uppercase");
  const lowercase = document.getElementById("lowercase");
  const symbols = document.getElementById("symbols");
  const form = document.getElementById("stopDefultValue");
  const password = document.getElementById("password");

  const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
  const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
  const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
  const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
console.log("SYM ---- ", SYMBOLS_CHAR_CODES)
  length.addEventListener("input", syncLength);
  numbers.addEventListener("input", syncLength);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const length = e.target[0].value;
    const numbers = e.target[2].checked;
    const uppercase = e.target[1].checked;
    // const lowercase = lowercaseElement.checked;
    const symbols = e.target[3].checked;
    console.log(e);
    const createdPassword = writePassword(
      length,
      numbers,
      uppercase,
      symbols
    );
    password.innerText = createdPassword;
  });

  // Get references to the #generate element
  // var generateBtn = document.querySelector("#generate");

  // Write password to the #password input

  function writePassword(length, numbers, uppercase, symbols) {
    console.log(symbols)
    let charCodes = LOWERCASE_CHAR_CODES;
    if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
    
    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
      const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    console.log (passwordCharacters)
    return passwordCharacters.join("");
  }

  // length value function
  function syncLength(e) {
    const value = (e.target.value = value);
    length.value = value;
    numbers.value = value;
  }

  function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  // Add event listener to generate button
  // generateBtn.addEventListener("click", function () {});
}
generate ()