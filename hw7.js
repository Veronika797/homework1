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
