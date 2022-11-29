const temperature = document.querySelector('#temp');
const windy = document.querySelector('#windy');
const chill = document.querySelector('#chill');
const weatherIcon = document.querySelector('#weatherIcon');
const caption = document.querySelector('figcaption');

//Get data from API - openweathermap.org
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=fc5361e2db78eb703660684632aff32b';

async function fetchAPI(){
    try{
        const responce = await fetch(apiURL);
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

//Display results
function resultsDisplay(data){
    temperature.textContent = data.main.temp.toFixed(0);
    let description = capitalize(data.weather[0].description);
    caption.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Icon of current condition in Fairbanks, AK which is ${description}`;
    windy.textContent = data.wind.speed;
    let temp = data.main.temp;
    let speed = data.wind.speed;
    chill.textContent = windChill(temp, speed);
}


//Windchill calculator
function windChill(temp, speed){
    let prettychill = '';
if (temp <= 50 && speed > 3) {
    let windchill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
    prettychill = `${Math.round(windchill)} ℉`;  
} else {
    prettychill = 'N/A';
}
return prettychill;
}