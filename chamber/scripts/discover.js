let numVisits = Number(window.localStorage.getItem('visits-ls'));
if (numVisits !== 0){
    document.querySelector('.discoverVisit').textContent = numVisits;
}else{
    document.querySelector('.discoverVisit').textContent = 'This is your first visit';
}
numVisits++;
window.localStorage.setItem('visits-ls', numVisits);