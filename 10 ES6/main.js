// перше завдання
let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: a, second: c, third: b, fourth: y, fifth = "Name №5" } = names;

console.log(a); // Tom
console.log(b); // Ray
console.log(c); // Sam
console.log(y); // Bob
console.log(fifth); // Name №5

// друге завдання
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// третє завдання
function mul(...args) {
  let result = 1;
  let hasNumber = false;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      result *= args[i];
      hasNumber = true;
    }
  }

  return hasNumber ? result : 0;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
console.log(mul(6, "string", 7, null, 2, true)); // 84

// четверте завдання
function mapBuilder(keysArray, valuesArray) {
  const map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }

  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"
console.log(map.get(4)); // i

// п'яте завдання
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2

// шосте завдання
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return () => {
      this.result = callback();
    };
  },
};

client.calc(3768);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
