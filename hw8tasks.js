// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

//  2
function isPositive(item) {
    return item >= 0;
    }
    function isMale(item) {
    return item.gender === 'male';
    }
    function filter(arr, ruleFunction) {
    const result = [];

    arr.map(element => {
        if (ruleFunction(element)) {
            result.push(element);
        }
    })
    return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const peoples = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peoples, isMale));