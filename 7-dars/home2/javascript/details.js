const countryDetailsContainer = document.getElementById("country-details");
const backButton = document.getElementById("back-button");
const backToTopButton = document.getElementById('backToTop');

backButton.addEventListener("click", () => {
    window.history.back();
});

const country = JSON.parse(localStorage.getItem("selectedCountry"));

if (country) {
    countryDetailsContainer.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.common} flag">
        <div class="country-info">
            <h3>${country.name.common}</h3>
            <div class="state">
                <div class="country-name">
                    <p><strong>Native Name:</strong> ${country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</p>
                    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Sub Region:</strong> ${country.subregion}</p>
                    <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "Not Available"}</p>
                </div>
                <div class="country-details">
                    <p><strong>Top Level Domain:</strong> ${country.tld ? country.tld[0] : "Not Available"}</p>
                    <p><strong>Currencies:</strong> ${country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(", ") : "N/A"}</p>
                    <p><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(", ") : "Not Available"}</p>
                </div>
            </div>
            <div class="border-countries">
                <b>Border Countries:</b>
                <div class="border-countries-list">${country.borders ? country.borders.map(border => `<span>${border}</span>`).join("") : "Not Available"}</div>
            </div> 
        </div>
    `;
}
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
