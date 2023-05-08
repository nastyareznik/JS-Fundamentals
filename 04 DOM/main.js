// перше завдання
function showListItems() {
  const listItems = document.querySelectorAll("#list li"); // 10, 11, 12, 13, 14
  const modalContent = `${listItems[0].textContent}, ${
    listItems[listItems.length - 1].textContent
  }, ${listItems[1].textContent}, ${listItems[3].textContent}, ${
    listItems[2].textContent
  }`;
  alert(modalContent); // 10, 14, 11, 13, 12
}
// друге завдання
const h1 = document.querySelector("h1");
const paragraphs = document.querySelectorAll("p");
h1.style.backgroundColor = "green";
paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";
const ulElements = document.querySelectorAll("#myList li");
let newStr = "";
ulElements.forEach((li) => {
  newStr += li.innerText;
});
console.log(newStr);
const span = document.querySelector("span");
span.style.display = "none";
//третє завдання
let body = document.getElementsByTagName("body")[0];
let main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
let div = document.createElement("div");
div.setAttribute("id", "myDiv");
let p = document.createElement("p");
p.innerHTML = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
// четверте завдання
const form = document.querySelector(".array fieldset");
const outDiv = document.querySelector(".out");
const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputs = form.querySelectorAll(".arr");
  let outStr = "";
  inputs.forEach((input) => {
    outStr += `${input.getAttribute("data-form")}: ${input.value}<br>`;
  });
  outDiv.innerHTML = outStr;
});
// п'яте завдання
// 1) вибрати всі теги із класом circle
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  const animClass = circle.dataset.anim; // 2) перебрати кожен елемент, і вибрати його data-anim значення
  if (animClass) {
    circle.classList.add(animClass); // 3) вибране значення додати як клас за допомогою classList до цього елемента.
  }
});
setTimeout(() => {
  circles.forEach((circle) => {
    if (!circle.classList.contains("animated")) {
      console.log(
        `Анімація для елементу ${
          circle.querySelector("h3").textContent
        } не застосувалася`
      );
    }
  });
}, 5000); // 4) перевірити чи застосувались анімації

// шосте завдання
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const materials = document.querySelectorAll(".material");
const outPrice = document.getElementById("outprice");

function updatePrice() {
  let price = 0;
  const color = document
    .querySelector(".color.active")
    .getAttribute("data-price");
  const size = document
    .querySelector(".size.active")
    .getAttribute("data-price");
  const material = document
    .querySelector(".material.active")
    .getAttribute("data-price");
  price = parseFloat(color) + parseFloat(size) + parseFloat(material);
  outPrice.innerText = price.toFixed(2);
}

colors.forEach((color) => {
  color.addEventListener("click", () => {
    colors.forEach((c) => {
      c.classList.remove("active");
    });
    color.classList.add("active");
    updatePrice();
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((s) => {
      s.classList.remove("active");
    });
    size.classList.add("active");
    updatePrice();
  });
});

materials.forEach((material) => {
  material.addEventListener("click", () => {
    materials.forEach((m) => {
      m.classList.remove("active");
    });
    material.classList.add("active");
    updatePrice();
  });
});
