// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
// const usersArr = [
//     new User(1, 'Oleh', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(2, 'Karina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(3, 'Dima', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(4, 'Nina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(5, 'Vika', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(6, 'Nazar', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(7, 'Victor', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(8, 'Oksana', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(9, 'Vanya', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(10, 'Sophia', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565')
// ];
//
// console.log(usersArr);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clientsArr = [
//     new Client(1, 'Oleh', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(2, 'Karina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(3, 'Dima', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(4, 'Nina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(5, 'Vika', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(6, 'Nazar', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(7, 'Victor', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(8, 'Oksana', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(9, 'Vanya', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(10, 'Sophia', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas'])
// ];
//
// console.log(clientsArr);


//
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, yearOfCreate, maxSpeed, engine){
//     this.model = model;
//     this.producer =  producer;
//     this.yearOfCreate = yearOfCreate;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         console.log(
//             `model: ${this.model}
//             producer: ${this.producer}
//             yearOfCreate: ${this.yearOfCreate}
//             maxSpeed: ${this.maxSpeed}
//             engine: ${this.engine}
//             driver: ${this.driver.name}`
//         );
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.yearOfCreate = newValue;
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// };
// let car = new Car('Mercedes-Benz', 'German', 2019, 300, 2.5);
//
// let driver = {
//     name: 'Vasya',
//     age: 18
// };
// car.drive();
// car.addDriver(driver);
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// console.log(car);
//
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car{
//     constructor(model, producer, yearOfCreate, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfCreate = yearOfCreate;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info(){
//         console.log(
//             `model: ${this.model}
//             producer: ${this.producer}
//             yearOfCreate: ${this.yearOfCreate}
//             maxSpeed: ${this.maxSpeed}
//             engine: ${this.engine}
//             driver: ${this.driver.name}`
//         );
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     changeYear(newValue){
//         this.yearOfCreate = newValue;
//     };
//     addDriver(driver){
//         this.driver = driver;
//     };
// }
// let car = new Car('Mercedes-Benz', 'German', 2019, 300, 2.5);
//
// let driver = {
//     name: 'Vasya',
//     age: 18
// };
// car.drive();
// car.addDriver(driver);
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// console.log(car);

//
// 5 Взяти масив з завдання 1.
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
// const usersArr = [
//     new User(1, 'Oleh', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(2, 'Karina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(3, 'Dima', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(4, 'Nina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(5, 'Vika', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(6, 'Nazar', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(7, 'Victor', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(8, 'Oksana', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(9, 'Vanya', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565'),
//     new User(10, 'Sophia', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565')
// ];
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// console.log(usersArr.filter(value => value.id % 2 === 0));

// - Відсортувати його по id. по зростанню
// console.log(usersArr.sort((a, b) => a.id - b.id));

// - Відсортувати його по id. по спаданню
// console.log(usersArr.sort((a, b) => b.id - a.id));

//
// 6. Взяти масив з завдання 2.
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clientsArr = [
//     new Client(1, 'Oleh', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas', 'milk']),
//     new Client(2, 'Karina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple']),
//     new Client(3, 'Dima', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(4, 'Nina', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas', 'car', 'computer']),
//     new Client(5, 'Vika', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['bananas', 'window']),
//     new Client(6, 'Nazar', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas', 'juice', 'ssd' ,'bike']),
//     new Client(7, 'Victor', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(8, 'Oksana', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(9, 'Vanya', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas']),
//     new Client(10, 'Sophia', 'sdfsdfsd', 'sdfsdfs@gmail.com', '58556565', ['apple', 'bananas'])
// ];
// Відсортувати його по кількості товарів в полі order. по спаданню
// console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));
