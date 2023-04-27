// перше завдання
function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("Перший аргумент має бути масивом");
  }
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Другий та третій аргументи мають бути числами");
  }
  if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {
    throw new Error(
      "Другий та третій аргументи мають бути меншими за розмір масиву та не меншими за 0"
    );
  }
  return arr[first] + arr[second];
}

try {
  let result = sumSliceArray(array, first, second); //
  console.log(result); //
} catch (error) {
  console.log("Error Message:", error.message);
}
let array = [4, 5, 6, 7, 8, 9];
console.log(sumSliceArray(array, 3, 4)); // 15

//  друге завдання

function checkAge() {
  try {
    const name = prompt("Enter your name");
    if (!name) {
      throw new Error("The field is empty! Please enter your name");
    }
    const age = prompt("Enter your age");
    if (!age) {
      throw new Error("The field is empty! Please enter your age");
    }
    if (age < 18 || age > 70) {
      throw new RangeError("User`s age is less than 18 or more than 70");
    }
    if (isNaN(age)) {
      throw new TypeError("Value entered in the age field is not a number");
    }
    const status = prompt("Enter your status (admin, moderator, user):");
    if (!status) {
        throw new Error("The field is empty! Please enter your status");
      }
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Incorrect word is entered in the field status");
    }
    alert("You have access to watch the movie!");
  } catch (error) {
    alert(error.name + ": " + error.message);
  }
}
checkAge(); 

//  третє завдання
function calcRectangleArea(width, height) {
    try {
        const width = +prompt("Enter width");
        if (isNaN(width)) {
            throw new TypeError("Value entered in the field is not a number");
        }
        const height = +prompt("Enter height");
        if (isNaN(height)) {
            throw new TypeError("Value entered in the field is not a number");
        }
        let area = width * height;
        alert(`Rectangle area is ${area}`);
    }
    catch (error) {
        alert(error.name + ": " + error.message)
    }
}
calcRectangleArea();

//  четверте завдання
class MonthException {
    constructor(message) {
    this.name = 'MonthException';
    this.message = "Incorrect month number";
    }
}
function showMonthName(month) {
    const months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number.');
  }
  return months[month - 1];
}
try {
  console.log(showMonthName(5));  // May
  console.log(showMonthName(14)); // MonthException Incorrect month number
} catch (e) {
  console.log(`${e.name} ${e.message}`);
}
console.log(showMonthName(6));    // June
console.log(showMonthName(4));    // April
console.log(showMonthName(13));   // MonthException {name: 'MonthException', message: 'Incorrect month number.'}


//  п'яте завдання

  function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
    }
    return { id: id };
  }
  
  function showUsers(ids) {
    let validIds = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        let user = showUser(ids[i]);
        validIds.push(user);
      } catch (error) {
        console.error(error.message);
      }
    }
    return validIds;
  }
  
  let result = showUsers([98, -56, 13, -3]);
  console.log(result); // {id: 98}  {id: 13} 
  // ID must not be negative: -56
  // ID must not be negative: -3
  
  
 