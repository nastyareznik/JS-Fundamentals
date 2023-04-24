
let name= alert('Anastasiia');

console.log("Reznik");

let firstStr= 'Hello';
let secondStr= ' JavaScript';
console.log(firstStr);
console.log(secondStr);
console.log(`Message: ${firstStr +  secondStr}`);

let message = 'Intro to JS'; // String
let age = 48; // Number
let confirmation = true; // Boolean
let unknownVar; // Undefined
let lastName = null; // Null

let isAdult = confirm("Are you older than 18?");
console.log(isAdult);

let myName = 'Anastasiia';
let myLastName = 'Reznik';
let myStudyGroup = 'JS Fundamentals';
let myBirthYear = 2003;
let myMaritalStatus = 'Single';
let valid = true;
let password = null;
let phoneNumber;

console.log(`Year of birth: ${myBirthYear}, type: ${typeof(myBirthYear)}`);
console.log(`Valid: ${valid}, type: ${typeof(valid)}`);
console.log(`Name: ${myName}, type: ${typeof(myName)}`);
console.log(`Last Name: ${myLastName}, type: ${typeof(myLastName)}`);
console.log(`Study Group: ${myStudyGroup}, type: ${typeof(myStudyGroup)}`);
console.log(`Marital status: ${myMaritalStatus}, type: ${typeof(myMaritalStatus)}`);
console.log(`Password: ${password}, type: ${typeof(password)}`);
console.log(`Phone number: ${phoneNumber}, type: ${typeof(phoneNumber)}`);

let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let usersPassword = prompt("Enter your password:");
console.log(`Dear user, your login is ${login}, your email is ${email}, your password is ${usersPassword}`);
