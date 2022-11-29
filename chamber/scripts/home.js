const weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = new Date();
let whatDay = weekDays[day.getDay()]

//Banner For Monday & Tuesday
if (whatDay=='Monday'||whatDay=='Tuesday'){
    document.querySelector('#banner').textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}else{
    document.querySelector('#banner').style.display = 'none';
}

//spotlight
const spotlightData = 'https://nic-is-hoppi.github.io/wdd230/chamber/data/data.json';
const spotlights = document.querySelector('#spotlights');

fetch(spotlightData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   const companies = jsonObject['companies'];
   companies.forEach(displaySpotlight);
  });

function displaySpotlight(member){
    if(member.membership == 'gold'){
        let spotlightCard = document.createElement('section');
        let spotlightName = document.createElement('h2');
        let spotlightLogo = document.createElement('img');
        
        spotlightName.textContent = member.name;
        spotlightCard.appendChild(spotlightName);

        spotlightLogo.setAttribute('src', member.image);
        spotlightLogo.setAttribute('alt', `Logo for ${member.name}`);
        spotlightLogo.setAttribute('loading', 'lazy');
        spotlightCard.appendChild(spotlightLogo);

        document.querySelector('section.spotlights').appendChild(spotlightCard);
    }
}