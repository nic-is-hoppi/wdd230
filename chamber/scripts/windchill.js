const temp = document.querySelector('#temp').textContent;
const wind = document.querySelector('#windy').textContent;

if (parseInt(temp) <= 50 && parseInt(wind) > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
    const prettychill = Math.round(windchill);  
    document.querySelector('#chill').textContent = prettychill + "°F";
} else {
    document.querySelector('#chill').textContent = "N/A";
}