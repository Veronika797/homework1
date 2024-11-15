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
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(8, 4));
console.log(min(6, 6));