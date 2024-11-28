// 1
// let str = 'js';
// let upperStr = str.toUpperCase();
// console.log(upperStr);

// // 2
// function filterArrayOfString(array, prefix) {
//     return array.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
// }
// const string = ['книга', 'кинжал', 'кирпич', 'икра', 'игра'];
// const prefix = 'ки';
// const result = filterArrayOfString(string, prefix);
// console.log(result);

// 3
// let number = 32.58884;
// const roundedDown = Math.floor(number);
// console.log(roundedDown);

// const roundedUp = Math.ceil(number);
// console.log(roundedUp);

// const roundedNearest = Math.round(number);
// console.log(roundedNearest);

// // 4
// const numbers = [52, 53, 49, 77, 21, 32];
// const minVal = Math.min(...numbers);
// const maxVal = Math.max(...numbers);
// console.log(minVal);
// console.log(maxVal);

// // 5
// function getRandomNumber() {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
// }
// getRandomNumber();

// // 6
// function acceptCeilReturnRandom(n) {
// if(!Number.isInteger(n) || n <= 0) {
//     alert("Вы ввели некорректное число")
// }
// const length = Math.floor(n / 2);
// const randomArray = [];
// for (let i = 0; i < length; i++) {
//     const randomNum = Math.floor(Math.random() * n);
//     randomArray.push(randomNum);
// }
// return randomArray;
// }
// const res = acceptCeilReturnRandom(10);
// console.log(res);

// // 7
// function acceptTwoCeilReturnRandom(min, max) {
//     if(!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
//         alert("Введите два ццелых числа, где первое меньше второго");
//     }
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNum;
// }
// const result = acceptTwoCeilReturnRandom(1, 10);
// console.log(result);

// 8
// const currentDate = new Date();
// console.log(currentDate);

// 9
// const in73Days = new Date(currentDate);
// in73Days.setDate(currentDate.getDate() + 73);
// console.log(in73Days);

// 10
function dateReturnFormat(date) {
    const months = ['январь', 'февраль',
                    'март', 'апрель', 
                    'май', 'июнь',
                    'июль', 'август',
                    'сентябрь', 'октябрь', 
                    'ноябрь', 'декабрь'];
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 
                    'среда', 'четверг', 'пятница', 'суббота'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;
    return `${dateString} ${timeString}`;
}
const currentDate = new Date();
console.log(dateReturnFormat(currentDate));