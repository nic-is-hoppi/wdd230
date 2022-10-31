const daysofWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date();
let dayofWeek = daysofWeek[d.getDay()]

//Banner For Monday & Tuesday
if (dayofWeek=='Monday'||dayofWeek=='Tuesday'){
    document.querySelector('#banner').textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}else{
    document.querySelector('#banner').styles.display = 'none';
}