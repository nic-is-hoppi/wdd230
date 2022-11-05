document.querySelector('#dateTime').value = Date();

const form = document.querySelector('#joinForm');
const input = document.querySelector('#businessPosition');


const regex = /^[a-zA-Z\-\x20]{7,}$/;

function testInfo(businessPosition) {
   return regex.test(businessPosition.value);
   
}

form.addEventListener('submit', (event) => {
  if (!testInfo(input)){
    event.preventDefault();
}
});