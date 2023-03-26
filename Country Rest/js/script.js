const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
  // console.log(data);
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
//   console.log(countriesHTML);
  const container = document.getElementById('country-container')
  container.innerHTML = countriesHTML.join(' ');
};

const getCountryHTML = (country) => {
  return `<div class="country">
  <img src="${country.flags.png}" alt="">
        <p><h2>${country.name.common}</h2></p>
        <p><h2>Capital: ${country.capital}</h2></p>
        <p><h2>Cotinent: ${country.continents}</h2></p>
        </div>`;
};

loadCountries();
