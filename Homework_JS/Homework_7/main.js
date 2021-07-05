// Треба реалізувати свій розпорядок дня.

// function myDay (cb) {
//         console.log('Мій розпорядок дня!');
//         console.log('День починається...');
//         setTimeout(() => {
//             cb(null, 'Просинаюся');
//         }, 2000);
// };
// function breakfast(foods, cb){
//         setTimeout(() => {
//             if (!foods) {
//                 cb('Треба сходити в магазин, бо їсти нема чого');
//                 return;
//             }
//             cb(null, 'Починаю снідати');
//         }, 3000);
// };
// function brushTeeth (brush, cb){
//         setTimeout(() => {
//             if (!brush) {
//                 cb('Закінчилася зубна паста, треба сходити в магазин');
//                 return;
//             }
//             cb(null, 'Чищу зуби');
//         }, 1500);
// };
// function listenLectures(cb){
//         setTimeout(() =>{
//             cb(null, 'Слухаю лекції з університету');
//         }, 7000);
// };
// function goForAWalk (rain, cb){
//         setTimeout(() => {
//             if (rain) {
//                 cb('Падає дощ, сиджу вдома');
//                 return;
//             }
//             cb(null, 'Іду гуляти на вулицю');
//         }, 3500);
// };
// function watchVideo (internet, cb){
//         setTimeout(() => {
//             if (!internet) {
//                 cb('Немає інтернету');
//                 return;
//             }
//             cb(null, 'Дивлюся відео на Youtube');
//         }, 4700);
// };
// function goToBed(cb){
//         setTimeout(() =>{
//             cb(null, 'Іду лягати спати');
//         }, 6000);
// };
//
// function end(cb) {
//     setTimeout(() => {
//         cb(null, 'Мій розпорядок дня закінчився!');
//     }, 1000);
// };
//
// myDay((err, data) =>{
//     console.log(data);
//     brushTeeth(data,(err, data) =>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         breakfast(data,(err, data) =>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//             listenLectures((err, data) =>{
//                 console.log(data);
//                 goForAWalk(err, (err, data) =>{
//                     if(err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//                     watchVideo(data, (err, data) =>{
//                         if(err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(data);
//                         goToBed( (err, data) => {
//                             console.log(data);
//                             end( (err, data) => {
//                                 console.log(data);
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })



// function myDay () {
//     return new Promise((resolve) => {
//         console.log('Мій розпорядок дня!');
//         console.log('День починається...');
//         setTimeout(() => {
//             resolve('Просинаюся');
//         }, 2000);
//     });
// };
//
// function breakfast(foods){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!foods) {
//                 reject('Треба сходити в магазин, бо їсти нема чого');
//             }
//             resolve('Починаю снідати');
//             }, 3000);
//     });
// };
// function brushTeeth (brush){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!brush) {
//                 reject('Закінчилася зубна паста, треба сходити в магазин');
//             }
//             resolve('Чищу зуби');
//         }, 1500);
//     });
// };
// function listenLectures(lecture){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Слухаю лекції з університету');
//         }, 7000);
//     });
// };
// function goForAWalk (rain){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (rain) {
//                 reject('Падає дощ, сиджу вдома');
//             }
//             resolve('Іду гуляти на вулицю');
//         }, 3500);
//     });
// };
// function watchVideo (internet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internet) {
//                 reject('Немає інтернету');
//             }
//             resolve('Дивлюся відео на Youtube');
//         }, 4700);
//     });
// };
// function goToBed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Іду лягати спати');
//         }, 6000);
//     });
// };
//
// myDay()
//     .then(wakeUpMes => {
//         console.log(wakeUpMes);
//         return brushTeeth(true);
// })
//     .then(brushTeethMes =>{
//     console.log(brushTeethMes);
//         return breakfast(true);
// })
//     .then(breakfastMes =>{
//         console.log(breakfastMes);
//         return listenLectures();
//     })
//     .then(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//         return goForAWalk(false);
//     })
//     .then(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//         return watchVideo(true);
//     })
//     .then(watchVideoMes =>{
//         console.log(watchVideoMes);
//         return goToBed();
//     })
//     .then(goToBedMes =>{
//         console.log(goToBedMes);
//     })
//     .catch(brushTeethMes =>{
//         console.log(brushTeethMes);
//     })
//     .catch(breakfastMes =>{
//         console.log(breakfastMes);
//     })
//     .catch(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//     })
//     .catch(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//     })
//     .catch(watchVideoMes =>{
//         console.log(watchVideoMes);
//     })
//     .finally(() =>{
//         console.log('Мій розпорядок дня закінчився!');
//     })




// function myDay () {
//     return new Promise((resolve) => {
//         console.log('Мій розпорядок дня!');
//         console.log('День починається...');
//         setTimeout(() => {
//             resolve('Просинаюся');
//         }, 2000);
//     });
// };
//
// function breakfast(foods){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!foods) {
//                 reject('Треба сходити в магазин, бо їсти нема чого');
//             }
//             resolve('Починаю снідати');
//         }, 3000);
//     });
// };
// function brushTeeth (brush){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!brush) {
//                 reject('Закінчилася зубна паста, треба сходити в магазин');
//             }
//             resolve('Чищу зуби');
//         }, 1500);
//     });
// };
// function listenLectures(lecture){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Слухаю лекції з університету');
//         }, 7000);
//     });
// };
// function goForAWalk (rain){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (rain) {
//                 reject('Падає дощ, сиджу вдома');
//             }
//             resolve('Іду гуляти на вулицю');
//         }, 3500);
//     });
// };
// function watchVideo (internet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internet) {
//                 reject('Немає інтернету');
//             }
//             resolve('Дивлюся відео на Youtube');
//         }, 4700);
//     });
// };
// function goToBed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Іду лягати спати');
//         }, 6000);
//     });
// };
// function end(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Мій розпорядок дня закінчився!');
//         }, 1000);
//     });
// };
//
// async function day(){
//     try {
//         const myDayMes = await myDay();
//         console.log(myDayMes);
//         const brushTeethMes = await brushTeeth(true);
//         console.log(brushTeethMes);
//         const breakfastMes = await breakfast(true);
//         console.log(breakfastMes);
//         const listenLecturesMes = await listenLectures();
//         console.log(listenLecturesMes);
//         const goForAWalkMes = await goForAWalk(false);
//         console.log(goForAWalkMes);
//         const watchVideoMes = await watchVideo(true);
//         console.log(watchVideoMes);
//         const goToBedMes = await goToBed();
//         console.log(goToBedMes);
//         const endMes = await end();
//         console.log(endMes);
//     } catch (err){
//         console.log(err);
//     }
// }
// day();
