// перше завдання
const newWindow = window.open("", "NewWindow", "width=300,height=300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(function () {
  newWindow.close();
}, 6000);
setTimeout(newWindow);

// друге завдання
function ChangeCSS() {
  const text = document.getElementById("text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}
// третє завдання
const firstBtn = document.getElementById("firstBtn");
firstBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
const secondBtn = document.getElementById("secondBtn");
secondBtn.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});
const thirdBtn = document.getElementById("thirdBtn");
thirdBtn.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});
thirdBtn.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});
link.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});

// четверте завдання
const deleteBtn = document.getElementById('fourthBtn');
const namesList = document.getElementById('names');

deleteBtn.addEventListener('click', () => {
  const selectedOption = namesList.options[namesList.selectedIndex];
  if (selectedOption) {
    namesList.removeChild(selectedOption);
  }
});

// п'яте завдання
const fifthBtn = document.getElementById("fifthBtn");
const btnText = document.getElementById("btnText");
fifthBtn.addEventListener("click", () => {
  btnText.innerText = "I was pressed!";
});
fifthBtn.addEventListener("mouseover", () => {
  btnText.innerText = "Mouse on me!";
});

fifthBtn.addEventListener("mouseout", () => {
  btnText.innerText = "Mouse is not on me!";
});

// шосте завдання
function showWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('sizes').innerHTML = 'Width: ' + width + ', Height: ' + height;
  }
  showWindowSize();
  window.addEventListener('resize', showWindowSize);
  
// сьоме завдання
const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");

countrySelect.addEventListener("change", function() {

  citiesSelect.innerHTML = "";
  const selectedCountry = countrySelect.options[countrySelect.selectedIndex].value;

  switch (selectedCountry) {
    case "ger":
      citiesSelect.add(new Option("Berlin", "ber"));
      citiesSelect.add(new Option("Hamburg", "ham"));
      citiesSelect.add(new Option("Frankfurt", "fr"));
      break;
    case "usa":
      citiesSelect.add(new Option("New York", "ny"));
      citiesSelect.add(new Option("Washington", "wa"));
      citiesSelect.add(new Option("Chicago", "chi"));
      break;
    case "ukr":
      citiesSelect.add(new Option("Kyiv", "kyi"));
      citiesSelect.add(new Option("Lviv", "lvv"));
      citiesSelect.add(new Option("Odessa", "od"));
      break;
  }
});