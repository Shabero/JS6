// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// function reverseArray(arr) {
//     return arr.reverse();
// }
// let originalArray = [1,2,3];
// let reversedArray = reverseArray(originalArray);
// console.log(reversedArray);

// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений,
// таких как false, undefined, пустые строки, ноль, null.
// * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// function cleanArray(arr) {
//     return arr.filter((item) => !!item)
// }
// let originalArray = [0, 1, false, 2, undefined, '', 3, null];
// let cleanedArray = cleanArray(originalArray);
// console.log(cleanedArray);

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// function removeDuplicates (arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index)
// }
//
// let originalArray = [1,2,3,1,2];
// let uniqueArray = removeDuplicates(originalArray);
// console.log(uniqueArray);

// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let letters = ['a', 'b', 'c']
// let numbers = [1, 2, 3]
// console.log(...letters,...numbers)

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let numbers = [1,2,3]
// numbers.push(4,5,6)
// console.log(numbers)

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let numbers1 = [1, 2, 3];
// let numbers2 = [4, 5, 6, ...numbers1];
// console.log(numbers2)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let numbers = [1, 2, 3, 4, 5]
// numbers.splice(1,2, )
// console.log(numbers)

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// arr = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// };
// let keysArray = Object.keys(arr);
// console.log(keysArray)

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой.['Капуста', 'Репа', 'Редиска', 'Морковка']
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let vegetablesString = vegetables.join(',');
// console.log(vegetablesString);

// Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

// function reverseCase(str) {
//     return str.split('').map(char => {
//         if (char === char.toLowerCase()) {
//             return char.toUpperCase();
//         } else {
//             return char.toLowerCase();
//         }
//     }).join('');
// }
//
// let inputString = 'КаЖдЫй ОхОтНиК';
// let reversedString = reverseCase(inputString);
//
// console.log(reversedString); // Выведет 'кАжДыЙ оХоТнИк'


// 1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка
const cars = [
    {
        make: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 25000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2017,
        color: "blue",
        price: 30000
    },
    {
        make: "Tesla",
        model: "Model S",
        year: 2018,
        color: "black",
        price: 120000
    },
    {
        make: "Chevrolet",
        model: "Camaro",
        year: 1970,
        color: "orange",
        price: 60000
    },
    {
        make: "Dodge",
        model: "Challenger",
        year: 2019,
        color: "red",
        price: 35000
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2019,
        color: "blue",
        price: 90000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        color: "white",
        price: 40000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        year: 2019,
        color: "black",
        price: 60000
    }
]
let filterCars = cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year <= 2019);
console.log(filterCars);

