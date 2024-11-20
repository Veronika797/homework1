// задача 1
// const array = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (array[i] === 10) {
//         break;
//     }
// }

// задача 2
// const array = [1, 5, 4, 10, 0, 3];
// const index = array.indexOf(4);
// console.log(index);

// задача 3
// const array = [1, 3, 5, 10, 20];
// const joinArray = array.join(" ");
// console.log(joinArray);

// задача 4
// const multArray = [];
// for (let i = 0; i < 3; i++) {
//     const newArray = [];
//     for (let c = 0; c < 3; c++) {
//         newArray.push(1);
//     }
//     multArray.push(newArray);
// }
// console.log(multArray);

// задача 5
// let array = [1, 1, 1];
// array.push(2, 2, 2);
// console.log(array);


// задача 6
// let array = [9, 8, 7, 'a', 6, 5];
// array.sort();
// console.log(array);
// const filteredArray = array.filter(item => item !== 'a');
// console.log(filteredArray);

// задача 7
// let array = [9, 8, 7, 6, 5];
// const userNum = prompt("Угадайте число от 5 до 9");
// if (array.includes(Number(userNum))) {
//     alert("Угадал");
// } else {
//     alert("Не угадал");
// }

// задача 8
// let line = 'abcdef';
// let newLine = line.split('').reverse().join('');
// console.log(newLine);


// задача 9
// const longArray = [[1, 2, 3],[4, 5, 6]];
// const shortArray = [...longArray[0], ...longArray[1]];
// console.log(shortArray);

// задача 10
// const randomNumber = [1, 6, 7, 3, 9, 2];
// for (let i=0; i < randomNumber.length - 1; i++) {
//     const sum = randomNumber[i] + randomNumber[i + 1];
//     console.log(`Сумма ${randomNumber[i]} + ${randomNumber[i + 1]} : ${sum}`);
// }

// задача 11
// function square(arr) {
//     return arr.map(item => item ** 2);
// }
// console.log(square([2, 5, 7]));

// задача 12
// function getLength(arr) {
//     return arr.map(item => item.length);
// }
// console.log(getLength(['hello', 'my', 'friend']));

// задача 13
// function filterArray(number) {
//     return number.filter(item => item < 0);
// }
// console.log(filterArray([1, 3, -2, 9, -7, -3, 9, 5]));

// задача 14
function randomArray() {
    return Math.floor(Math.random() * 10);
}
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomArray());
}
console.log(arr);

const evenArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    }
}
console.log(evenArray);

// задача 15
