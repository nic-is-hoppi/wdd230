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

//Banner For Monday & Tuesday
if (dayofWeek=='Monday'||dayofWeek=='Tuesday'){
    document.querySelector('#banner').textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}else{
    document.querySelector('#banner').styles.display = 'none';
}

//Live Copyright and Updated on Footer
document.querySelector('.currentyear').textContent = new Date().getFullYear();
document.querySelector('.lastupdate').textContent = document.lastModified;

//Visit Log for Discover Page
let numVisits = Number(window.localStorage.getItem('visits-ls'));
if (numVisits !== 0){
    document.querySelector('.discoverVisit').textContent = numVisits;
}else{
    document.querySelector('.discoverVisit').textContent = 'This is your first visit';
}
numVisits++;
localStorage.setItem('visits-ls', numVisits);