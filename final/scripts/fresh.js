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
        input.setAttribute('class', 'options');
        input.setAttribute('value', `${option.name}`);
        input.setAttribute('onclick', 'checkboxes(this)');
        document.querySelector('div#optionList').appendChild(input);

        label.textContent = option.name;
        label.setAttribute('for', 'options');
        document.querySelector('div#optionList').appendChild(label);
   }
   
//Check Input
function checkboxes(input){
    let checkBoxes = document.querySelectorAll('.options:checked');
            if(checkBoxes.length == 4){
               input.checked = false; 
               alert("You can only pick three options");
       }
}


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
    fruits.textContent = selectedFruits();
    document.querySelector('#output').appendChild(fruits);
    instruction.textContent = document.querySelector('#specialInstruct').value;
    document.querySelector('#output').appendChild(instruction);

}

//Fruits that are Selected
function selectedFruits(){
    let fruity = document.querySelectorAll('.options:checked');
    let fruits = '';
    for (var i = 0; i < fruity.length; i++) {
        fruits = fruits + fruity[i].value + " ";
    }
    return fruits;
}

//Form submission
const form = document.querySelector('#orderForm');
document.querySelector('#dateTime').value = Date();

form.addEventListener('submit', (event) => {
    numOrders++;
    window.localStorage.setItem('orders-ls', numOrders);

});