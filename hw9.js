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