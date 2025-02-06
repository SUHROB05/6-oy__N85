const searchInput = document.getElementById("search");
const regionFilter = document.getElementById("region-filter");
const countriesContainer = document.getElementById("countries");
const backToTopButton = document.getElementById('backToTop');


if (localStorage.getItem("searchText")) {
    searchInput.value = localStorage.getItem("searchText");
}
if (localStorage.getItem("selectedRegion")) {
    regionFilter.value = localStorage.getItem("selectedRegion");
}

async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        displayCountries(countries);
    } catch (error) {
        console.error("Ma'lumot olishda xatolik:", error);
    }
}

function displayCountries(countries) {
    countriesContainer.innerHTML = "";
    countries.forEach(country => {
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");
        countryCard.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.alt} flag">
        <div class="country-info">
             <h3>${country.name.common}</h3>
             <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
             <p><strong>Region:</strong> ${country.region}</p>
             <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "Not Available"}</p>
             <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(country.name.common)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="map-link">
                View on Map
             </a>
        </div>
    `;
        countryCard.addEventListener("click", (event) => {
           
            if (event.target.classList.contains("map-link")) {
                event.stopPropagation();
                return;
            }
            
            localStorage.setItem("selectedCountry", JSON.stringify(country));
            localStorage.setItem("searchText", ""); 
            localStorage.setItem("selectedRegion", "all"); 
            window.location.href = "./html/country.html";
        });

        countriesContainer.appendChild(countryCard);
    });

    applyFilters(); 
}


searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    localStorage.setItem("searchText", searchText);

    const countryCards = document.querySelectorAll(".country-card");
    countryCards.forEach(card => {
        const countryName = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = countryName.includes(searchText) ? "block" : "none";
    });
});

regionFilter.addEventListener("change", (e) => {
    const selectedRegion = e.target.value;
    localStorage.setItem("selectedRegion", selectedRegion);

    applyFilters();
});

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;

    const countryCards = document.querySelectorAll(".country-card");
    countryCards.forEach(card => {
        const countryName = card.querySelector("h3").textContent.toLowerCase();
        const region = card.querySelector("p:nth-child(3)").textContent.split(": ")[1];

        const matchSearch = countryName.includes(searchText);
        const matchRegion = selectedRegion === "all" || region === selectedRegion;

        card.style.display = matchSearch && matchRegion ? "block" : "none";
    });
}

fetchCountries();

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});