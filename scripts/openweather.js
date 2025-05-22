const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = '803a5617f399eff11d7cd9234a030f60';
const lat = '49.75056';
const lon = '6.63569';
const units = 'imperial';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch (apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)} &deg;F</strong>`
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}


apiFetch();