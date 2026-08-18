// Data for the 5 Hottest and 5 Coldest Places on Earth
const hottestPlaces = [
  { name: "Death Valley", country: "USA", temp: "56.7°C / 134.1°F" },
  { name: "Kebili", country: "Tunisia", temp: "55.0°C / 131.0°F" },
  { name: "Mitribah", country: "Kuwait", temp: "54.0°C / 129.2°F" },
  { name: "Tirat Zvi", country: "Israel", temp: "54.0°C / 129.2°F" },
  { name: "Basra", country: "Iraq", temp: "53.9°C / 129.0°F" }
];

const coldestPlaces = [
  { name: "Vostok Station", country: "Antarctica", temp: "-89.2°C / -128.6°F" },
  { name: "Klinck Station", country: "Greenland", temp: "-69.6°C / -93.3°F" },
  { name: "Oymyakon", country: "Russia", temp: "-67.7°C / -89.9°F" },
  { name: "Verkhoyansk", country: "Russia", temp: "-67.8°C / -90.0°F" },
  { name: "Denali", country: "USA (Alaska)", temp: "-73.0°C / -99.4°F" }
];

const weatherList = document.getElementById("weatherList");
const hotBtn = document.getElementById("hotBtn");
const coldBtn = document.getElementById("coldBtn");

// Function to render weather cards
function displayPlaces(data) {
  weatherList.innerHTML = "";
  data.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <span class="place-name">${place.name}</span>
        <span class="place-country">${place.country}</span>
      </div>
      <span class="temp">${place.temp}</span>
    `;
    weatherList.appendChild(card);
  });
}

// Event Listeners for switching tabs
hotBtn.addEventListener("click", () => {
  hotBtn.classList.add("active");
  coldBtn.classList.remove("active");
  displayPlaces(hottestPlaces);
});

coldBtn.addEventListener("click", () => {
  coldBtn.classList.add("active");
  hotBtn.classList.remove("active");
  displayPlaces(coldestPlaces);
});

// Initial display load
displayPlaces(hottestPlaces);