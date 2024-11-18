// домашнее задание
function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = 0;
    while (userGuess !== randomNumber) {
        userGuess =  prompt('Угадай число от 1 до 100');
        userGuess = Number(userGuess);
        if (userGuess === randomNumber) {
            alert('Верно! Ты отгадал число');
        } else if (userGuess < randomNumber) {
            alert('Загаданное число больше. Попытай удачу еще раз');
        }
        else if (userGuess > randomNumber) {
            alert('Загаданное число меньше. Попытай удачу еще раз');
        }
        else {
            alert('Попытай удачу еще раз');
        }
    }
}
