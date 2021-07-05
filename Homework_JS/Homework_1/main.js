// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let string = 'hello';
// let name = 'owu';
// let domenOne = 'com';
// let domenTwo = 'ua';
// let numberOne = 1;
// let numberTen = 10;
// let numberMinus = -999;
// let numberOneTwoThree = 123;
// let pi = 3.14;
// let decimalFractions = 2.7;
// let numberSixteen = 16;
// let flag = true;
// let isCar = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(string); alert(string); document.write(string); document.write('<br>');
// console.log(name); alert(name); document.write(name); document.write('<br>');
// console.log(domenOne); alert(domenOne); document.write(domenOne); document.write('<br>');
// console.log(domenTwo); alert(domenTwo); document.write(domenTwo); document.write('<br>');
// console.log(numberOne); alert(numberOne); document.write(numberOne); document.write('<br>');
// console.log(numberTen); alert(numberTen); document.write(numberTen); document.write('<br>');
// console.log(numberMinus); alert(numberMinus); document.write(numberMinus); document.write('<br>');
// console.log(numberOneTwoThree); alert(numberOneTwoThree); document.write(numberOneTwoThree); document.write('<br>');
// console.log(pi); alert(pi); document.write(pi); document.write('<br>');
// console.log(decimalFractions); alert(decimalFractions); document.write(decimalFractions); document.write('<br>');
// console.log(numberSixteen); alert(numberSixteen); document.write(numberSixteen); document.write('<br>');
// console.log(flag); alert(flag); document.write(flag); document.write('<br>');
// console.log(isCar); alert(isCar); document.write(isCar); document.write('<br>');

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// let string = 'hello world';
// let name = 'owu the best';
// let domenOne = 'money.com';
// let domenTwo = 'fine.ua';
// let numberOne = 7;
// let numberTen = 44;
// let numberMinus = -9;
// let numberOneTwoThree = 1237;
// let pi = 3.142;
// let decimalFractions = 2.4;
// let numberSixteen = 13;
// let flag = false;
// let isCar = true;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(string); alert(string); document.write(string); document.write('<br>');
// console.log(name); alert(name); document.write(name); document.write('<br>');
// console.log(domenOne); alert(domenOne); document.write(domenOne); document.write('<br>');
// console.log(domenTwo); alert(domenTwo); document.write(domenTwo); document.write('<br>');
// console.log(numberOne); alert(numberOne); document.write(numberOne); document.write('<br>');
// console.log(numberTen); alert(numberTen); document.write(numberTen); document.write('<br>');
// console.log(numberMinus); alert(numberMinus); document.write(numberMinus); document.write('<br>');
// console.log(numberOneTwoThree); alert(numberOneTwoThree); document.write(numberOneTwoThree); document.write('<br>');
// console.log(pi); alert(pi); document.write(pi); document.write('<br>');
// console.log(decimalFractions); alert(decimalFractions); document.write(decimalFractions); document.write('<br>');
// console.log(numberSixteen); alert(numberSixteen); document.write(numberSixteen); document.write('<br>');
// console.log(flag); alert(flag); document.write(flag); document.write('<br>');
// console.log(isCar); alert(isCar); document.write(isCar); document.write('<br>');

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// let firstName = 'Oleh';
// let middleName = 'Volodymyrovych';
// let lastName = 'Protsyshyn';
// let person = lastName + ' ' + firstName + ' ' + middleName;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let firstName = prompt('Please enter your First Name');
// let middleName = prompt('Please enter your Middle Name');
// let age= prompt('Please enter your age');

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let str = `Вітаю ${firstName} ${middleName}. Тобі ${age} років`;
// console.log(str); alert(str);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 == 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false
