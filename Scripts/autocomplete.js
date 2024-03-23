const inputEl = document.querySelector("#input-id");
inputEl.addEventListener("input", onInputChange);

getCountryData();

let countryNames = [];
let countryNames1 = [];
let capitalNames1 = [];
let citiesNames = [];
async function getCountryData() {
  const countryResponse = await fetch("https://restcountries.com/v2/all");
  const data = await countryResponse.json();

  const countryResponse1 = await fetch(
    "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json"
  );
  const data1 = await countryResponse1.json();

  countryNames1 = data.map((country) => {
    return country.name;
  });

  capitalNames1 = data.map((capitalname) => {
    return capitalname.capital;
  });
  citiesNames = data1.map((capitalname) => {
    return capitalname.name;
  });

  capitalNames1 = capitalNames1.filter(function (element) {
    return element !== undefined;
  });

  countryNames = countryNames1.concat(capitalNames1, citiesNames);
}

function onInputChange() {
  removeAutocompleteDropDown();
  console.log(inputEl.value);
  const value = inputEl.value.toLowerCase();
  if (value.length === 0) return;
  const filteredNames = [];
  countryNames.forEach((countryName) => {
    if (countryName.substr(0, value.length).toLowerCase() === value)
      filteredNames.push(countryName);
  });
  createAutocompleteDropDown(filteredNames);
}

function createAutocompleteDropDown(list) {
  const listEl = document.createElement("ul");
  listEl.className = "autocomplete-list";
  listEl.id = "autocomplete-list";
  list.forEach((country) => {
    const listItem = document.createElement("li");
    const countryButton = document.createElement("button");
    countryButton.innerHTML = country;
    countryButton.addEventListener("click", onCountryButtonClick);
    listItem.appendChild(countryButton);

    listEl.appendChild(listItem);
  });
  document.querySelector("#autocomplete-wrapper").appendChild(listEl);
}

function removeAutocompleteDropDown() {
  const listEl = document.querySelector("#autocomplete-list");
  if (listEl) listEl.remove();
}

function onCountryButtonClick(event) {
  event.preventDefault();
  const buttonEl = event.target;
  inputEl.value = buttonEl.innerHTML;
  WeatherVar.search();
  locationButtonClick();
  removeAutocompleteDropDown();
}
