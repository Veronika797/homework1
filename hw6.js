// function generateTasks(min, max) {
//     const operators = ['+', '-', '*', '/'];
//     const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
//     let operator = operators[Math.floor(Math.random() * operators.length)];
//     if (operator === '/' && num2 === 0) {
//         num2 = 1;
//     }
//     const randomTasks = `${num1} ${operator} ${num2}`;
//     alert(randomTasks);
//     let answer = prompt(Math.floor(parseFloat(`Посчитай и напиши ответ: ${randomTasks}`)));
//     answer = parseFloat(answer);
//     let correctAnswer;
//     function roundUpNum() {
//         let roundNum;
//        if (correctAnswer % 1 >= 0.5) {
//         roundNum = Math.ceil();
//        } else {
//         roundNum = Math.floor();
//        }
//        return roundNum;
//     }
//     switch (operator) {
//         case '+':
//             correctAnswer = num1 + num2;
//             break;
//         case '-':
//             correctAnswer = num1 - num2;
//             break;
//         case '*':
//             correctAnswer = num1 * num2;
//             break;
//         case '/':
//            correctAnswer = num1 / num2;
//             break;
//         default:
//             alert('Не правильный оператор');
//             return;
//     } 
//     if(answer === correctAnswer) {
//         alert('Ответ верный');
//     }
//     else {
//         alert('Ошибка');
//     }
//     generateTasks(10, 1);
// }


function generateTasks(min, max) {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '/' && num2 === 0) {
        num2 = 1;
    }
    const randomTasks = `${num1} ${operator} ${num2}`;
    alert(randomTasks);
    let answer;
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
    let userAnswer = prompt(`Посчитай и напиши ответ: ${randomTasks}`);
    if(parseFloat(userAnswer) === answer) {
        alert('Ответ верный');
    }
    else {
        alert('Ошибка');
    }
    generateTasks(10, 5);
}




// function generateTasks(min, max) {
//     const operators = ['+', '-', '*', '/'];
//     const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
//     let operator = operators[Math.floor(Math.random() * operators.length)];
//     if (operator === '/' && num2 === 0) {
//         num2 = 1;
//     }
//     const randomTasks = `${num1} ${operator} ${num2}`;
//     alert(randomTasks);
//     let answer = prompt(`Посчитай и напиши ответ: ${randomTasks}`);
//     answer = parseFloat(answer);
//     switch (operator) {
//         case '+':
//             correctAnswer = num1 + num2;
//             break;
//         case '-':
//             correctAnswer = num1 - num2;
//             break;
//         case '*':
//             correctAnswer = num1 * num2;
//             break;
//         case '/':
//            correctAnswer = num1 / num2;
//             break;
//         default:
//             alert('Не правильный оператор');
//             return;
//     } 
//     if(correctAnswer === answer) {
//         alert('Ответ верный');
//     }
//     else {
//         alert('Ошибка');
//     }
//     generateTasks(1, 5);
// }
// // generateTasks(1, 100);