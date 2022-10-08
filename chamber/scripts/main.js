//Hamburger Button
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Live date on header
const daysofWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date();
let dayofWeek = daysofWeek[d.getDay()]
const monthsofYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = monthsofYear[d.getMonth()];
document.querySelector('#today').textContent = dayofWeek +", " + d.getDate() + " " + currentMonth + " " + d.getFullYear();

//Live Copyright and Updated on Footer
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastupdate').textContent = document.lastModified;