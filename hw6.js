// игра простая арифметика
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
