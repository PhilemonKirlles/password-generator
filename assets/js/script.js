// Assignment code here
function generate() {
   // get DOM Elements:
  const password = document.getElementById("password");
  const length = document.getElementById("length");
  const numbers = document.getElementById("numbers");
  const uppercase = document.getElementById("uppercase");
  // const lowercase = document.getElementById("lowercase");
  const symbols = document.getElementById("symbols");
  const form = document.getElementById("stopDefultValue");
  //construct ascii-char codes 
  const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
  const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
  const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
  const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
 //  length value function
  length.addEventListener("input", syncLength);
  numbers.addEventListener("input", syncLength);
  uppercase.addEventListener("input", syncLength);
  symbols.addEventListener("input", syncLength);

  // To Be Continued:
  //plan:
  //function passwordCopy() {
  //   /* Get the text field 
  //   var copyPassword = document.getElementById("password");

  //   Copy the text inside the text field 
  //   navigator.clipboard.writeText(copyPassword.value);
  //   Alert  copied text 
  //   alert("Copied the password: " + copyPassword.value);
  // }
//form event listeners, and passing them to function
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const length = e.target[0].value;
    const numbers = e.target[2].checked;
    const uppercase = e.target[1].checked;
    // const lowercase = lowercaseElement.checked;
    const symbols = e.target[3].checked;
    console.log(e);
    const generatePassword = writePassword(length, numbers, uppercase, symbols);
    password.innerText = generatePassword;
  });

  // Get references to the #generate element
  // var generateBtn = document.querySelector("#generate");

  // generate password to the #password textarea and concatenate the values 
  function writePassword(length, numbers, uppercase, symbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

    const passwordCharacters = [];
    //for loop: using (Math.random )
    for (let i = 0; i < length; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    console.log(passwordCharacters);
    return passwordCharacters.join("");
  }

  // length value function
  
  function syncLength(e) {
    length.value = value;
    const value = (e.target.value = value);
    
  }
  console.log (e);
  function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }
}
generate();
