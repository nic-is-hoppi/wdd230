//Form submission
const form = document.querySelector('#orderForm');
document.querySelector('#dateTime').value = Date();

form.addEventListener('submit', (event) => {
    numOrders++;
    window.localStorage.setItem('orders-ls', numOrders);
});