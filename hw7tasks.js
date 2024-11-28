// 1
let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

// 2
function filterArrayOfString(array, prefix) {
    return array.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}
const string = ['книга', 'кинжал', 'кирпич', 'икра', 'игра'];
const prefix = 'ки';
const result = filterArrayOfString(string, prefix);
console.log(result);

// 3
let number = 32.58884;
const roundedDown = Math.floor(number);
console.log(roundedDown);

const roundedUp = Math.ceil(number);
console.log(roundedUp);

const roundedNearest = Math.round(number);
console.log(roundedNearest);

// 4
const numbers = [52, 53, 49, 77, 21, 32];
const minVal = Math.min(...numbers);
const maxVal = Math.max(...numbers);
console.log(minVal);
console.log(maxVal);

// 5
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}
getRandomNumber();
