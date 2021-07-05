// --створити масив з:
//     - з 5 числових значень
// let arrayNumbers = [1, 2, 3, 4, 5];

// - з 5 стічкових значень
// let arrayStrings = ['he', 'lo', 'world', 'nice', 'owu'];

// - з 5 значень стрічкового, числового та булевого типу
// let array = [1, 'nice', 'car', false, 77];

// - та вивести його в консоль
// console.log(arrayNumbers);
// console.log(arrayStrings);
// console.log(array);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'hi';
// console.log(arr);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i = 0; i < 10; i++){
//     document.write(`<div>OWU</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i = 0; i < 10; i++){
//     document.write(`<div>OWU ${i}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while(i < 20){
//     document.write(`<h1>Hello</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while(i < 20){
//     document.write(`<h1>Hello ${i}</h1>`);
//     i++;
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNumbers = [0, 1, 2, 5, 4, 6, 8, 1, 3, 4];
// for(let i = 0; i < arrayNumbers.length; i++){
//     console.log(arrayNumbers[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayStrings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// for(let i = 0; i < arrayStrings.length; i++){
//     console.log(arrayStrings[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [4, 6, 'sf', 'm', false, 33, true, 44, 'fsd', 8];
// let i = 0;
// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [44, 33, 7, 'dfs', 'hi', false, 63, 777, true, 7];
// for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === 'boolean'){
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [44, 33, 7, 'dfs', 'hi', false, 63, 777, true, 7];
// for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === 'number'){
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [44, 33, 7, 'dfs', 'hi', false, 63, 777, true, 7];
// for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === 'string'){
//         console.log(array[i]);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 4;
// array[1] = 6;
// array[2] = 'dsf';
// array[3] = false;
// array[4] = 3;
// array[5] = 'nice';
// array[6] = true;
// array[7] = 'world';
// array[8] = 'hello';
// array[9] = 55;
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i+=2){
//     console.log(i);
//     document.write(`<h1>${i}</h1>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//         document.write(`<h1>${i}</h1>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//         document.write(`<h1>${i}</h1>`);
//     }
// }
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
/////////////////////////////////////////////////
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (const users of usersWithId) {
//     for(const cities of citiesWithId){
//         if(cities.user_id === users.id){
//             users.address = cities;
//             usersWithCities.push(users);
//         }
//     }
// }
// console.log(usersWithCities);
