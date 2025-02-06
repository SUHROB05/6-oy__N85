const worldContayneri = document.getElementById("world-contayner-id");


async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    if (!res.ok || res.status !== 200) {
        throw new Error("Xatolik!");
    }
    return data;
}

getData()
    .then((data) => {
        rendir(data);
    })
    .catch((err) => {
        console.log("error")
    })
    .finally(() => {

    });

function rendir(data) {
    if (data.length) {
        data.map((cuntry) => {
            const div = document.createElement("div");
            div.classList = "card";
            div.innerHTML = `
            <div class="card-img">
                        <img src="${cuntry.flags.svg}" alt="">
                    </div>
                    <div class="card-text">
                        <h2>${cuntry.name.common}</h2>
                        <p>Population: <span> ${cuntry.population}</span></p>
                        <p>Region: <span> ${cuntry.region}</span></p>
                        <p>Capital: <span>${cuntry.capital}</span></p>
                        <a href="${cuntry.maps.googleMaps}" target="_blank">&#x27A3; Lokeyshin</a>
                    </div>
            `

            worldContayneri.append(div);
            
        })
    }
}

