document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    let isNight = false;

    // Проверяем текущее состояние переключателя
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.style.backgroundColor = '#333';  // Ночная тема
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';  // Дневная тема
            document.body.style.color = '#000';
        }
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

