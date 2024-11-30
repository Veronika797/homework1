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
