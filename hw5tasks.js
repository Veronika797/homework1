
// задача 1
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(8, 4));
console.log(min(6, 6));

// задача 2
function checkNum(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log(checkNum(4));
console.log(checkNum(5));

// задача 3.1
function squareNum(n) {
    console.log(n * n);
}
squareNum(5);
squareNum(7);

// задача 3.2
function returnSquare(n) {
    return n * n;
}
const n1 = returnSquare(3);
console.log(n1);

const n2 = returnSquare(9);
console.log(n2);

// задача 4
function ageUser() {
    const age = prompt('Сколько Вам лет?');
    const ageNumber = Number(age);
    if (ageNumber < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && ageNumber <= 12) {
        console.log('Привет, друг!');
    }
    else if (ageNumber >= 13)
        console.log('Добро пожаловать!');
}
ageUser();

// задача 5
function checkNumber(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log('Оба значения являются числом');
    }
}
checkNumber(1, 51);
checkNumber(tt, 8);

// // задача 6 
function ranNum() {
        const num = prompt('Введите любое число');
        const number = Number(num);
        if (isNaN(number)) {
            return 'Переданный параметр не является числом';
        } else {
            const cubeNum = Math.pow(number, 3);
            return `${number} в кубе равняется ${cubeNum}`;
        }
}
for (let i = 0; i <= 10; i++) {
console.log(ranNum());
}

// задача 7
    const circle1 = {
        radius: 3,
        getArea: function() {
            return Math.PI * this.radius * this.radius;
        },
        getPerimeter: function() {
            return 2 * Math.PI * this.radius;
        }
    };
    const circle2 = {
        radius: 5,
        getArea: function() {
            return Math.PI * this.radius * this.radius;
        },
        getPerimeter: function() {
            return 2 * Math.PI * this.radius;
        }
    };
console.log(`Радиус circle1: ${circle1.radius}, Площадь: ${circle1.getArea().toFixed(2)}`);
console.log(`Радиус circle2: ${circle2.radius}, Площадь: ${circle2.getArea().toFixed(2)}`);
console.log(`Радиус circle1: ${circle1.radius}, Периметр: ${circle1.getPerimeter().toFixed(2)}`);
console.log(`Радиус circle2: ${circle2.radius}, Периметр: ${circle2.getPerimeter().toFixed(2)}`);
