// домашнее задание
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// function guessNumber() {
//     let userGuess = prompt('Угадай число от 1 до 100');
//     userGuess = Number(userGuess);
//     if (userGuess === randomNumber) {
//         alert('Верно! Ты отгадал число');
//     } else if (userGuess < randomNumber) {
//         alert('Загаданное число больше. Попытай удачу еще раз');
//         guessNumber();
//     }
//     else if (userGuess > randomNumber) {
//         alert('Загаданное число меньше. Попытай удачу еще раз');
//         guessNumber();
//     }
//     else {
//         alert('Попытай удачу еще раз');
//     }
// }
// guessNumber();

// задача 1
// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(8, 4));
// console.log(min(6, 6));

// задача 2
// function checkNum(n) {
//     return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
// }
// console.log(checkNum(4));
// console.log(checkNum(5));

// задача 3.1
// function squareNum(n) {
//     console.log(n * n);
// }
// squareNum(5);
// squareNum(7);

// задача 3.2
// function returnSquare(n) {
//     return n * n;
// }
// const n1 = returnSquare(3);
// console.log(n1);

// const n2 = returnSquare(9);
// console.log(n2);

// задача 4
// function ageUser() {
//     const age = prompt('Сколько Вам лет?');
//     const ageNumber = Number(age);
//     if (ageNumber < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (age >= 0 && ageNumber <= 12) {
//         console.log('Привет, друг!');
//     }
//     else if (ageNumber >= 13)
//         console.log('Добро пожаловать!');
// }
// ageUser();

// задача 5
function checkNumber(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log('Оба значения являются числом');
    }
}
checkNumber(1, 51);
checkNumber(tt, 8);