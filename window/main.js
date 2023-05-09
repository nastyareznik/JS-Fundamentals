const citiesByCountry = {
  ger: [
    { name: 'Berlin', value: 'ber' },
    { name: 'Hamburg', value: 'ham' },
    { name: 'Munich', value: 'mun' }
  ],
  usa: [
    { name: 'New York', value: 'ny' },
    { name: 'Washington', value: 'wa' },
    { name: 'Boston', value: 'bo'},
    { name: 'Chicago', value: 'chi' }
  ],
  ukr: [
    { name: 'Kyiv', value: 'kyi' },
    { name: 'Lviv', value: 'lvv' },
    { name: 'Odessa', value: 'od' }
  ]
};

const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');

function updateCities() {
  const countryValue = countrySelect.value;
  const cities = citiesByCountry[countryValue];
  citiesSelect.innerHTML = '';

  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city.value;
    option.textContent = city.name;
    citiesSelect.appendChild(option);
  });
}

countrySelect.addEventListener('change', updateCities);

// update cities on page load
updateCities();
