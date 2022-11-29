const requestURL = 'https://nic-is-hoppi.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   const companies = jsonObject['companies'];
   companies.forEach(displayCompanies);
  });

   function displayCompanies(company) {    
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = company.name;
        card.appendChild(name);

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Logo for ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        card.appendChild(logo);

         phone.textContent = company.phonenumber;
        card.appendChild(phone);

        address.textContent = company.address;
        card.appendChild(address);
       
        document.querySelector('div.cards').appendChild(card);
   }
   
 const gridbutton = document.querySelector('#grid');
 const listbutton = document.querySelector('#list');
 const display = document.querySelector('.cards');

 gridbutton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
 });

 listbutton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
 });