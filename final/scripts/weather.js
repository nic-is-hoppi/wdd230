const temperature = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const caption = document.querySelector('figcaption');
const humidity = document.querySelector('#humid');

//Get data from Weather API - openweathermap.org
const currentapiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&&appid=933f9720ac5a6090f87c1afc15c4b50f';

async function fetchAPI(){
    try{
        const responce = await fetch(currentapiURL);
        if(responce.ok){
            const data = await responce.json();
            console.log(data);
            resultsDisplay(data);
        } else{
            console.log(`Response not OK ${await responce.text()}`);
        }
    }catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchAPI()

//Capitalize things
function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

//Display Current Weather
function resultsDisplay(data){
    temperature.textContent = data.main.temp.toFixed(0);
    let description = capitalize(data.weather[0].description);
    caption.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Icon of current condition in Carlsbad, CA which is ${description}`;
    humidity.textContent = data.main.humidity;
}

//Get data from Forecast API - openweathermap.org
const forecastapiURL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Carlsbad&units=imperial&&appid=b4225791b8830e5bb63d95b7c8a4bea3';

async function fetchForcastAPI(){
    try{
        const responce = await fetch(forecastapiURL);
        if(responce.ok){
            const data = await responce.json();
            console.log(data);
            displayForecast(data);
        } else{
            console.log(`Response not OK ${await responce.text()}`);
        }
    }catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchForcastAPI()

//Display Forecast
function displayForecast(data) {    
    let card = document.createElement('div');
    let day = document.createElement('p');
    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    let caption = document.createElement('figcaption');
    let temp = document.createElement('p');
    let humid = document.createElement('p');

    day.textContent = company.name;
    card.appendChild(day);

    card.appendChild(figure);

    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    icon.setAttribute('alt', `Icon of forecasted condition in Carlsbad, CA which is ${description}`);
    icon.setAttribute('loading', 'lazy');
    figure.appendChild(icon);

    caption.textContent = description;
    figure.appendChild(caption);

     temp.textContent = `${data.main.temp.toFixed(0)} &#8457;`;
    card.appendChild(temp);

    humid.textContent = `${data.main.humidity}%`;
    card.appendChild(humid);
   
    document.querySelector('section#weather').appendChild(card);
}