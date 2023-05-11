// перше завдання
function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }
  console.log(upperCase('lorem ipsum')); // String's not starts with uppercase character
  console.log(upperCase('Lorem ipsum')); // String's starts with uppercase character

  // друге завдання
  function checkEmail(email) {
    const newEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return newEmail.test(email);
  }
console.log(checkEmail('qwerty@gmail.com')); // true
console.log(checkEmail('qwertygmailcom')); //false

// третє завдання
const str = 'lorem ipsum' ; 
const regex = /^(\w+)\s+(\w+)$/;
const newStr = str.replace(regex, '$2, $1');
console.log(newStr); // ipsum, lorem

// четверте завдання
function validateCard(cardNumber) {
const cardFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/; 
if (!cardFormat.test(cardNumber)) {
    return "Incorrect card number!";
  }
  return "Correct card number!";
}
console.log(validateCard('3457-2189-0987-6789')); // Correct card number!
console.log(validateCard('3457-189-098-6789')); // Incorrect card number!
console.log(validateCard('3sd-2rt-0987-6789')); // Incorrect card number!

// п'яте завдання
function checkEmail(email) {
    const regex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
if (regex.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}
console.log(checkEmail('qwer3ty.com')); // Email is not correct!
console.log(checkEmail('qw-erty@gmail.com')); // Email is correct!
console.log(checkEmail('^qwerty@.com')); // Email is not correct!

// шосте завдання
function checkLogin(login) {
    if (/^[a-zA-Z][a-zA-Z0-9]{1,9}$/.test(login)) {
      const numbers = login.match(/\d+(\.\d+)?/g);
      if (numbers) {
        return numbers.map(parseFloat);
      } else {
        return [];
      }
    } else {
      return false;
    }
  }
 

// ?? 
const fullNameInput = document.getElementById("fullName");

function validateFullName() {
  const fullNameValue = fullNameInput.value.trim();
  const fullNameRegex = /^[A-Z][a-z]*(?:[ '-][a-zA-Z]+)*$/;
  if (fullNameRegex.test(fullNameValue)) {
    return true;
  } else {
    return false;
  }
}
fullNameInput.addEventListener("blur", validateFullName);

