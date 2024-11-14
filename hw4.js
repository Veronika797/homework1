// for (let i = 0; i < 2; i++) {
//     console.log('Привет');
// }

// let n = 1;

// while (n <= 6) {
//     console.log(n);
//     n++;
//     if (n === 6) {
//     break;
// }
// }

// let n = 7;
//  while (n <= 22) {
//      console.log(n);
//     n++;
//      if (n === 23) {
//     break;
// }
//  }

// const obj = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400'
// }

// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }

// let n = 1000;
// let num = 0;

// do {
//     n /= 2;
//     console.log(n);
//     console.log(num);
//     num++;
// }
// while (n >= 50);

let firstFriday = 5;
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log('Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.');
}