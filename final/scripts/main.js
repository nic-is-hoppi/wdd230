//Hamburger Button
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Live Copyright and Updated on Footer
document.querySelector('.currentyear').textContent = new Date().getFullYear();
document.querySelector('.lastupdate').textContent = document.lastModified;

//Drink Counter
let numOrders = Number(window.localStorage.getItem('orders-ls'));
if (numOrders !== 0){
    document.querySelector('.prevOrders').textContent = numOrders;
}else{
document.querySelector('.prevOrders').textContent = '0';
}
