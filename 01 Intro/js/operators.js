let a = 2;
let b = 4;
let c = 6;
if (a < b && b < c) {
  console.log("true");
} else {
  console.log("false");
}

// друге завдання
let x = 1;
let y = 2;

let res1 = "1" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = `true${y}`; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt(-x); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// третє завдання
let isAdult = +prompt("Enter your age");
if (isAdult >= 18) {
  alert("You have already reached the age of majority");
} else {
  alert("You are still too young");
}

// четверте завдання
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = {}; // 5
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  data[num] = data[num] ? data[num] + 1 : 1;
}
let maxCount = 0;
let mostCommon;
for (let num in data) {
  if (data[num] > maxCount) {
    maxCount = data[num];
    mostCommon = num;
  }
}
console.log(mostCommon); // 5

let newArr = arr.concat(arr[1]); // [4, 5, 2, 1, 6, 5, 3, 5, 2, 5, 5]
newArr = newArr.filter((n) => {
  return n != 5;
});
console.log(newArr); // [4, 2, 1, 6, 3, 2]

// п'яте завдання
let firstSide = +prompt("Enter the lengt of the side");
let secondSide = +prompt("Enter the lengt of the side");
let thirdSide = +prompt("Enter the lengt of the side");
if (
  isNaN(firstSide) ||
  isNaN(secondSide) ||
  isNaN(thirdSide) ||
  firstSide <= 0 ||
  secondSide <= 0 ||
  thirdSide <= 0
) {
  console.log("Incorrect data"); //перевірка на коректність
} else {
  let p = (firstSide + secondSide + thirdSide) / 2; //півпериметр
  let area = Math.sqrt(
    p * (p - firstSide) * (p - secondSide) * (p - thirdSide)
  ); //площа
  console.log(area.toFixed(3));

  if (
    firstSide ** 2 + secondSide ** 2 === thirdSide ** 2 ||
    secondSide ** 2 + thirdSide ** 2 === firstSide ** 2 ||
    firstSide ** 2 + thirdSide ** 2 === secondSide ** 2
  ) {
    console.log("Трикутник є прямокутним.");
  } else {
    console.log("Трикутник не є прямокутним.");
  }
}
//шосте завдання
let now = new Date();
let hour = now.getHours();
//перший спосіб
if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}
//другий спосіб
let greeting =
  hour >= 23 || hour < 5
    ? "Доброї ночі"
    : hour >= 5 && hour < 11
    ? "Доброго ранку"
    : hour >= 11 && hour < 17
    ? "Доброго дня"
    : "Доброго вечора";

console.log(greeting);
//сьоме завдання

let desiredIncome = prompt("Введіть бажаний дохід:");
let numberOfDelays = prompt("Введіть кількість запізнень:");

let linesOfCode = (parseInt(desiredIncome) / 50) * 100;
if (numberOfDelays >= 3) {
  linesOfCode -= (numberOfDelays - 2) * 100;
}
console.log(`Васі потрібно написати ${linesOfCode} рядків коду`);
