// угадай число
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

// простая арифметика
let countTasks = 0;
function generateTasks() {
    if (countTasks >= 3) {
        alert("Игра окончена");
        return;
    }
    const getRandomNumber = () => Math.floor(Math.random() * 10 + 1);
    const getRandomIndexOperator = () => Math.floor(Math.random() * 4);
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomIndexOperator(1)];
    if (operator === '/' && num2 === 0) {
                num2 = 1;
            }
    let result;
    switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                   result = num1 / num2;
                    break;
                default:
                    alert('Не правильный оператор');
                    return;
            } 
    const userMessage = `Посчитай и напиши ответ: ${num1} ${operator} ${num2} =`;
    const userAnswer = prompt(userMessage);
    if(parseFloat(userAnswer) === result) {
        alert("Ответ верный");
    } else {
        alert("Ошибка");
    }
    countTasks++;
generateTasks();
}

// переверни текст

function getRandomWords() {
    const words = ["земля", "солнце", "вода", "песок", "трава", "камень"];
    return words[Math.floor(Math.random() * words.length)];
 }
 
 function reverseString(str) {
    return str.split('').reverse().join('');
 }
 
 function gameReversText() {
    const origWord = getRandomWords();
    const reversedWord = reverseString(origWord);
    let attempts = 3;
    while (attempts > 0) {
       const guess = prompt(`Угадай слово ${reversedWord}. Осталось попыток: ${attempts}`);
       if (guess === origWord) {
          alert("Правильно");
          return;
       } else {
          attempts--;
          if (attempts > 0) {
            alert(`Не правильно. Попробуй снова`); 
          }
       }
    }
    
 alert(`Игра окончена. Правильный ответ: ${origWord}`);
 }
 
 
 // викторина
    const quiz = [
       {
           question: "Какой цвет небо?",
           options: ["1. Красный", "2. Синий", "3. Зеленый"],
           correctAnswer: 2 
       },
       {
           question: "Сколько дней в неделе?",
           options: ["1. Шесть", "2. Семь", "3. Восемь"],
           correctAnswer: 2
       },
       {
           question: "Сколько у человека пальцев на одной руке?",
           options: ["1. Четыре", "2. Пять", "3. Шесть"],
           correctAnswer: 2
       }
   ];
   function gameQuiz() {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
       const currentQuestion = quiz[i];
       let questionText = currentQuestion.question + "\n";
       for (let j = 0; j < currentQuestion.options.length; j++) {
          questionText += currentQuestion.options[j] + "\n";
       }
    const userAnswer = prompt(questionText);
    const userAnswerInt = parseInt(userAnswer);
    if (!isNaN(userAnswerInt) && userAnswerInt === currentQuestion.correctAnswer) {
       score++;
    }
    }
    alert("Количество правильных ответов: " + score);
 }

//  камень, ножницы, бумага
function getCompChoise() {
	const options = ["камень", "ножницы", "бумага"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}

function determineWinner(userChoise, compChoise) {
	if (userChoise === compChoise) {
		alert("Ничья");
		return 0;
	} else if (
		(userChoise === "камень" && compChoise === "ножницы") ||
		(userChoise === "ножницы" && compChoise === "бумага") ||
		(userChoise === "бумага" && compChoise === "камень") 
	) {
		alert("Вы выиграли");
		return 1;
	} else {
		alert("Вы проиграли");
		return -1;
	}
	}

	function playGame() {
		const totalRound = 5;
		let userScore = 0;
		let compScore = 0;
		for (let round = 1; round <= totalRound; round++) {
			const userChoise = prompt(`Раунд: ${round}. Вы выбираете: 'камень', 'ножницы' или 'бумага'`);
			const compChoise = getCompChoise();
			alert(`Ваш выбор: ${userChoise}`);
			alert(`Выбор компьютера: ${compChoise}`);
			const result = determineWinner(userChoise, compChoise);
			if (result === 1) {
				userScore++;
			} else if (result === -1) {
				compScore++;
			}
		}
		alert(`Игра окончена. Ваш счет: ${userScore}. Счет компьютера: ${compScore}`);
	}

    // генератор случайных цветов
    function randomColorGame() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const colorBox = document.getElementById('block-content');
    colorBox.addEventListener('click', () => {
        colorBox.style.backgroundColor = randomColorGame();
    });
