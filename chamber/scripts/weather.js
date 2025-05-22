const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = '803a5617f399eff11d7cd9234a030f60';
const lat = '49.75056';
const lon = '6.63569';
const units = 'imperial';
const numOfDays = 3;
const todayApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch (todayApiUrl);
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
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)} &deg;F</strong>`
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

async function forecastApiFetch() {
    try {
        const response = await fetch (forecastApiUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecastResults(data) {
  const forecastSection = document.querySelectorAll('.weather')[1]; // second .weather section
  const forecastParagraphs = forecastSection.querySelectorAll('p');

  const days = [0, 8, 16]; // today, tomorrow, day after tomorrow (3-hour steps)

  days.forEach((index, i) => {
    const forecast = data.list[index];
    const temp = forecast.main.temp.toFixed(0);
    forecastParagraphs[i].innerHTML = `${i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : 'Day After Tomorrow'}: <b>${temp} &deg;F</b>`;
  });
}

apiFetch();
forecastApiFetch();