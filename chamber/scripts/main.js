function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.querySelector('#today').textContent = new Date().get();

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastupdate').textContent = document.lastModified;