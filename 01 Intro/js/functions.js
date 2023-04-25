// перше завдання

function createArray(start, end) {
  let arr = [];
  for (let i = 2; i <= 9; i++) {
    arr.push(i);
  }
  return arr;
}
let arr = createArray(2, 9);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]

//друге задання
function createNewArray(a, b) {
  let numbersArray = [];
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      numbersArray.push(i);
    }
  }
  return numbersArray;
}
let numbersArr = createNewArray(10, 14);
console.log(numbersArr); // [10, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14]
// третє завдання
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    let rand = Math.floor(Math.random() * 500) + 1;
    arr.push(rand);
  }
  return arr;
}
let randomArray = randArray(5);
console.log(randomArray); // [492, 18, 250, 393, 155]

// четверте завдання
function compact(arr) {
  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cleanArr.indexOf(arr[i]) === -1) {
      cleanArr.push(arr[i]);
    }
  }
  return cleanArr;
}
const newArray = [3, 7, 8, 3, 6, 8];
const cleanArray = compact(newArray);
console.log(cleanArray); // [3, 7, 8, 6]

//п'яте завдання
let myArray = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];

let numbers = myArray.filter(function (element) {
  return typeof element === "number" && !isNaN(element);
});

let strings = myArray.filter(function (element) {
  return typeof element === "string";
});

console.log(numbers); // [5, 12, 99, 2]
console.log(strings); // ['Limit', 'a', '3', 'strong', 'broun']

// шосте завдання
function calc(a, b, op) {
  let result;
  if (op === 1) {
    result = a - b;
  } else if (op === 2) {
    result = a * b;
  } else if (op === 3) {
    result = a / b;
  } else {
    result = a + b;
  }

  return result;
}

console.log(calc(48, 6, 3)); // 8
console.log(calc(15, 5, 1)); // 10
console.log(calc(345, 8, 2)); // 2760
console.log(calc(20, 9, 6)); // 29

// сьоме завдання
function findUnique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.includes(arr[i])) {
      return false;
    } else {
      uniqueArr.push(arr[i]);
    }
  }
  return true;
}
console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true
console.log(findUnique([2, 2, 3, 4, 5])); // => false
