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

let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Введите номер месяца от 1 до 12');
} else {
    switch (monthNumber) {
        case 1: Январь
        case 2: Февраль
        case 12: Декабрь
            console.log('Сезон: Зима');        
            break;
        case 3: Март
        case 4: Апрель
        case 5: Май
            console.log('Сезон: Весна');
            break;
        case 6: Июнь
        case 7: Июль
        case 8: Август
            console.log('Сезон: Лето');
            break;
        case 9: Сентябрь
        case 10: Октябрь
        case 11: Ноябрь
            console.log('Сезон: Осень');
            break;
        default: 
        console.log('Ошибка');
    }
}