//Display Options
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   const options = jsonObject;
   options.forEach(displayOptions);
  });

   function displayOptions(option) {    
        let label = document.createElement('label');
        let input = document.createElement('input');

        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'options');
        input.setAttribute('class', 'options')
        input.setAttribute('value', `${option.name}`);
        document.querySelector('div#optionList').appendChild(input);

        label.textContent = option.name;
        label.setAttribute('for', 'options');
        document.querySelector('div#optionList').appendChild(label);
   }
   
//Check Input
$("input:checkbox").click(function() {
    let bol = $("input:checkbox:checked").length >=3;
    $("input:checkbox").not(":checked").attr("disabled",bol);
});


//Display Order Information
function displayOrder() {    
    let name = document.createElement('p'); 
    let email = document.createElement('p'); 
    let phone = document.createElement('p'); 
    let fruits = document.createElement('p');
    let instruction = document.createElement('p'); 

    name.textContent = document.querySelector('#firstName').value;
    document.querySelector('#output').appendChild(name);
    email.textContent = document.querySelector('#emailAddress').value;
    document.querySelector('#output').appendChild(email);
    phone.textContent = document.querySelector('#cellphone').value;
    document.querySelector('#output').appendChild(phone);
    fruits.textContent = document.querySelectorAll('.options');
    document.querySelector('#output').appendChild(fruits);
    instruction.textContent = document.querySelector('#specialInstruct').value;
    document.querySelector('#output').appendChild(instruction);

}

//Form submission
const form = document.querySelector('#orderForm');
document.querySelector('#dateTime').value = Date();

form.addEventListener('submit', (event) => {
    numOrders++;
    window.localStorage.setItem('orders-ls', numOrders);

});