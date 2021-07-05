// 1) створити функцію яка приймає масив та виводить його
// const arrFunction = (arr) => console.log(arr);
// arrFunction([1, 2, 3]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// const arrFunction = (arr) => console.log(arr);
// arrFunction(Array(10).fill().map(() =>Math.round(Math.random() * 10)));

// Ну або
// const arrFunction = (arr) => console.log(arr);
// const fillArray = () => {
//     let arr = [];
//     for(let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random() * 10));
//     }
//     arrFunction(arr);
// }
// fillArray();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minFunc = (numbers) => {
//     let minNumber = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(minNumber > numbers[i]){
//             minNumber = numbers[i];
//         }
//     }
//     return minNumber;
// };
// console.log(minFunc([3, 2, 8]));

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const minFunc = (numbers) => {
//     let maxNumber = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(maxNumber < numbers[i]){
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// };
// console.log(minFunc([3, 2, 8]));

// 5) створити функцію яка повертає найбільше число з масиву
// const maxFunc = (numbers) => {
//     let maxNumber = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(maxNumber < numbers[i]){
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// };
// console.log(maxFunc([3, 2, 8, 44]));

// 6) створити функцію яка повертає найменьше число з масиву
// const minFunc = (numbers) => {
//     let minNumber = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(minNumber > numbers[i]){
//             minNumber = numbers[i];
//         }
//     }
//     return minNumber;
// };
// console.log(minFunc([3, 2, 8, 4, 1]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let array = [4, 6, 8];
// console.log(array.reduce((acc, cur) => acc + cur));

// Або

// const array = (arr) =>{
//     let summa = 0;
//     for (const arrElement of arr) {
//         summa += arrElement;
//     }
//     return summa;
// }
// console.log(array([4, 6, 8]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const array = (arr) =>{
//     let summa = 0;
//     for (const arrElement of arr) {
//         summa += arrElement;
//     }
//     return summa / arr.length;
// }
// console.log(array([4, 6, 8]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// const objArr = (objArray) => {
//     let keyArr = [];
//     for (const objArrayElement of objArray) {
//         for (const objArrayElementKey in objArrayElement) {
//             keyArr.push(objArrayElementKey);
//         }
//     }
//     return keyArr;
// }
// console.log(objArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// const objArr = (objArray) => {
//     let keyArr = [];
//     for (const objArrayElement of objArray) {
//         for (const objArrayElementKey in objArrayElement) {
//             keyArr.push(objArrayElement[objArrayElementKey]);
//         }
//     }
//     return keyArr;
// }
// console.log(objArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// const sumFunc = (arr1, arr2) => {
//     let sumArr = [];
//     for(let i = 0; i < arr1.length; i++) {
//        for(let j = 0; j < arr2.length; j++){
//            if(i === j){
//                sumArr.push(arr1[i] + arr2[j]);
//            }
//        }
//     }
//     return sumArr;
// };
// console.log(sumFunc([1,2,3,4], [2,3,4,5]));
