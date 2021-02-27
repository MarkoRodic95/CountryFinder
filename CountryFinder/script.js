"use strict";

// One way to do it

// function getCountry(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error("Country not founded!");
//       return response.json();
//     })
//     .then((data) => {
//       const html = `
//       <tr scope = "row">
//       <td>${data[0].name}</td>
//       <td>${data[0].capital}</td>
//       <td>${data[0].region}</td>
//       <td>${data[0].population}</td>
//       <td>${data[0].languages[0].name}</td>
//       <td>${data[0].currencies[0].name}</td>
//       <td><img class="country_img" src="${data[0].flag}"/></td>
//       </tr>`;

//       document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
//     });
// }

////////////////////// Async/await //////////////////////

async function getCountry(country) {
  try {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    if (!response.ok) throw new Error("Country not founded!");
    const data = await response.json();
    const html = `
      <tr scope = "row">
      <td>${data[0].name}</td>
      <td>${data[0].capital}</td>
      <td>${data[0].region}</td>
      <td>${data[0].population}</td>
      <td>${data[0].languages[0].name}</td>
      <td>${data[0].currencies[0].name}</td>
      <td><img class="country_img" src="${data[0].flag}"/></td>
      </tr>`;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
  } catch (error) {
    alert(error.message);
  }
}

// Handling FIND button and input value

let [btn] = document.getElementsByClassName("btn-info");

btn.addEventListener("click", function () {
  let value = document.querySelector("#country").value;

  getCountry(value);
});

let input = document.querySelector("#country");

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    getCountry(input.value);
  }
});

// Sorting table columns alphabetically

function sortTable(number) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector(".table");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[number];
      y = rows[i + 1].getElementsByTagName("TD")[number];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

var countryName, capital, population, currency, continent, language;

countryName = document.querySelector("#name");
capital = document.querySelector("#capital");
continent = document.querySelector("#continent");
population = document.querySelector("#population");
language = document.querySelector("#language");
currency = document.querySelector("#currency");

countryName.addEventListener("click", function () {
  sortTable(0);
});
capital.addEventListener("click", function () {
  sortTable(1);
});
continent.addEventListener("click", function () {
  sortTable(2);
});
population.addEventListener("click", function () {
  sortTable(3);
});
language.addEventListener("click", function () {
  sortTable(4);
});
currency.addEventListener("click", function () {
  sortTable(5);
});
