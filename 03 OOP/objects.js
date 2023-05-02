// перше завдання
class Circle {
  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  static getCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  getCopy() {
    return new Circle(this.centerX, this.centerY, this.radius);
  }
  static getNewCircle(centerX, centerY, radius) {
    return new Circle(centerX, centerY, radius);
  }
  pointInside(x, y) {
    const distance = Math.sqrt(
      Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2)
    );
    return distance <= this.radius;
  }
  toString() {
    return `Circle(centerX: ${this.centerX}, centerY: ${this.centerY}, radius: ${this.radius})`;
  }
}
const circle = new Circle(0, 0, 8);
const circumference = circle.getCircumference();
console.log(circumference); // 50.26548245743669

const newCircle = new Circle(0, 0, 6);
const newStr = newCircle.toString();
console.log(newStr); // Circle(centerX: 0, centerY: 0, radius: 6)

// друге завдання
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
let student = {
  name: "Anastasiia",
  age: 20,
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
console.log(propsCount(student)); // 5

// третє завдання
class Person {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }
  showFullName() {
    console.log(`${this.surname} ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    console.log(`${this.surname} ${this.name} ${midleName}`);
  }
  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course >= 1 && course <= 6 ? course : "invalid";
  }
}
const stud1 = new Student("Inna", "Vasylenko", 2020);
console.log(stud1.showFullName("Igorivna")); // Vasylenko Inna Igorivna
console.log("Current course: " + stud1.showCourse()); //Current course: 3

// четверте завдання
class SimpleMarker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }
  print(text) {
    let inkNeeded = text.length * 0.5;
    if (inkNeeded > this.inkAmount) {
      console.log("Error: the ink is running out!");
      return;
    }
    this.inkAmount -= inkNeeded;
    console.log("%c" + text, `color: ${this.color}`);
  }
}
class RefillableMarker extends SimpleMarker {
  constructor(color, inkAmount, refillCapacity) {
    super(color, inkAmount);
    this.refillCapacity = refillCapacity;
  }

  refill() {
    this.inkAmount = this.refillCapacity;
    console.log(`Marker refilled with ${this.refillCapacity}% ink.`);
  }
}

const marker = new SimpleMarker("pink", 40);
marker.print("Let`s learn objects!"); // "Let`s learn objects!" рожевим кольором
const secondMarker = new SimpleMarker("blue", 2);
secondMarker.print("Let`s learn objects!"); // Error: the ink is running out!
const refillableMarker = new RefillableMarker("purple", 10, 300);
refillableMarker.print("Rose petals"); // "Rose Petals" рожевим кольором
console.log(`Ink amount: ${marker.inkAmount}%`);
refillableMarker.refill(); // Marker refilled with 300% ink.
console.log(`Ink amount: ${marker.inkAmount}%`);
refillableMarker.print(
  "Object oriented programming (OOP) intro. Objects. Classes"
); // "Object oriented programming (OOP) intro. Objects. Classes" фіолетовим кольором

// п'яте завдання
class Worker {
  constructor(fullName, dayRate, workingDays) {
    (this.fullName = fullName),
      (this.dayRate = dayRate),
      (this.workingDays = workingDays),
      (this._experience = 1.2);
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }
  showSalaryWithExperience() {
    let salaryWithExperience = this.showSalary() * this._experience;
    console.log(
      `Salary with experience (${this._experience}): ${salaryWithExperience}`
    );
    return salaryWithExperience;
  }
  get showExp() {
    return this._experience;
  }
  set setExp(value) {
    this._experience = value;
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

console.log(worker2.fullName);
worker2.showSalaryWithExperience();

console.log(worker3.fullName);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];

workers.sort(
  (a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
);

console.log("\nSorted salary:");
for (let worker of workers) {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
}
