function generateTasks(min, max) {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let value = NaN;
  value = isNaN(value) ? 0 : value;
    let operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '/' && num2 === 0) {
        num2 = 1;
    }
    const randomTasks = `${num1} ${operator} ${num2}`;
    alert(randomTasks);
    let answer = Math.floor(parseFloat(`Посчитай и напиши ответ: ${randomTasks}`));
    
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        default:
            alert('Не правильный оператор');
            return;
    }
    if(parseFloat(prompt(`Твой ответ для задачи: ${randomTasks}?`)) === answer) {
        alert('Ответ верный');
    }
    else {
        alert('Ошибка');
    }
    generateTasks(1, 100);
}
