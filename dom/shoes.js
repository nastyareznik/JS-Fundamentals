const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const materials = document.querySelectorAll('.material');
const outPrice = document.getElementById('outprice');

// функція для оновлення відображення ціни
function updatePrice() {
  let price = 0;
  const color = document.querySelector('.color.active').getAttribute('data-price');
  const size = document.querySelector('.size.active').getAttribute('data-price');
  const material = document.querySelector('.material.active').getAttribute('data-price');
  price = parseFloat(color) + parseFloat(size) + parseFloat(material);
  outPrice.innerText = price.toFixed(2);
}

// додати обробник події click до елементів з атрибутом data-color
colors.forEach(color => {
  color.addEventListener('click', () => {
    // зняти позначку активного елемента з інших елементів
    colors.forEach(c => {
      c.classList.remove('active');
    });
    // позначити елемент, який спричинив подію
    color.classList.add('active');
    updatePrice();
  });
});

// додати обробник події click до елементів з атрибутом data-size
sizes.forEach(size => {
  size.addEventListener('click', () => {
    // зняти позначку активного елемента з інших елементів
    sizes.forEach(s => {
      s.classList.remove('active');
    });
    // позначити елемент, який спричинив подію
    size.classList.add('active');
    updatePrice();
  });
});

// додати обробник події click до елементів з атрибутом data-material
materials.forEach(material => {
  material.addEventListener('click', () => {
    // зняти позначку активного елемента з інших елементів
    materials.forEach(m => {
      m.classList.remove('active');
    });
    // позначити елемент, який спричинив подію
    material.classList.add('active');
    updatePrice();
  });
});