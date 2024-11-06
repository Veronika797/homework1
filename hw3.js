// let password = 'пароль';
// alert(password);

// let password = (prompt('Введите пароль'));
// alert(password);

// let password = 'пароль';
// let userPassword = prompt('Введите пароль');
// if (userPassword === password) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неправильно');
// }

// let c = 2;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let c = 10;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let c = -3;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let d = 120;
// let e = 50;
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//  console.log('Неверно');   
// }

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

let monthNumber = 9;
if (monthNumber < 1 || monthNumber > 12) {
    ('Введите номер месяца от 1 до 12');
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            alert('Зима');        
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:alert
        case 10:alert
        case 11:alert
            alert('Осень');
            break;
        default: 
        console.log('Ошибка');
    }
}