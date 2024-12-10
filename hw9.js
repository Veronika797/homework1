// 1
const header = document.querySelector('#header');
const button = document.querySelector('#toggleButton');

button.addEventListener('click', () => {
    if (header.style.display === 'none') {
        header.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        header.style.display = 'none';
        button.textContent = 'Показать';
    }
});

// 2
const text = document.querySelector('#text');
const btn = document.querySelector('#colorButton');
btn.addEventListener('click', () => { 
    text.style.color = 'blue';
});

// 3
const text2 = document.querySelector('#headerText');
const button2 = document.querySelector('#changeTextBtn');
button2.addEventListener('click', () => { 
    text2.textContent = 'Привет, мир!';
});

// 4
const button3 = document.querySelector('#changeTextButton');
button3.addEventListener('click', () => { 
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(element => {
        element.textContent = 'Измененный текст';
    });
});

// 5
const buttonCngTxt = document.querySelector('#textCngBtn');
buttonCngTxt.addEventListener('click', () => { 
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(element => {
        element.textContent = 'Новый текст';
    });
});

// 6
const addElBtn = document.querySelector('#addElBtn');
addElBtn.addEventListener('click', () => {
const newText = document.createElement('p');
newText.textContent = 'Новый абзац';
document.body.appendChild(newText);
})