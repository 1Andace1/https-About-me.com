document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    let isNight = false;

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.style.backgroundColor = '#333';  // Ночная тема
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';  // Дневная тема
            document.body.style.color = '#000';
        }
    });
document.querySelectorAll('.scroll-link').forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition + window.pageYOffset - 50;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
document.querySelector('.back-to-top').addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

const textme = ["Привет, я Андрей!", "Frontend разработчик", "Добро пожаловать!"];
let currentPindex = 0;
let currentCindex = 0;

function type() {
    const currentP = textme[currentPindex];
    const textElement = document.getElementById('animaText');
    textElement.textContent = currentP.slice(0, currentCindex++);

    if (currentCindex > currentP.length) {
        setTimeout(erase, 2000); 
    } else {
        setTimeout(type, 200); 
    }
}

function erase() {
    const textElement = document.getElementById('animaText');
    textElement.textContent = textElement.textContent.slice(0, -1);

    if (textElement.textContent.length === 0) {
        currentPindex = (currentPindex + 1) % textme.length; 
        currentCindex = 0; 
        setTimeout(type, 500); 
    } else {
        setTimeout(erase, 100); 
    }
}
type();
});