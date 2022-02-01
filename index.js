// ЗАДАНИЕ 1
// let firstname = prompt('Как тебя зовут?');
// function sayHello (a) {
//   const hello = 'Привет, '+a+'!';
//   return hello;
// }
// sayHello(firstname);
// let Hello = sayHello(firstname);
// console.log(Hello);

// ЗАДАНИЕ 2
// let text = prompt('Введите текст');
// function isNotEmpty (enter) {
//   return enter === ''? false:true; 
// }
// isNotEmpty(text);

// ЗАДАНИЕ 3
// let price = Number(prompt('Цена продукта'));
// let num = Number(prompt('Количество'));
// function calcFullPrice (a, b) {
//   if (isNaN(a) || isNaN(b)){
//     return false;
//   }
//   return a*b;
// }
// calcFullPrice(price, num);

// ЗАДАНИЕ 4
// let price = (Number(prompt('Сумма заказа')));
// let money = (Number(prompt('Сколько денег в кошельке')));
// function isEnougnMoney (a, b) {
// return a<=b?true:false;
// }
// isEnougnMoney(price, money);

// ЗАДАНИЕ 5
// let numberOfFloor = (Number(prompt('Сколько этажей')));
// function numbOfFlats (a) { 
//  return a*4;
// }
// numbOfFlats(numberOfFloor);
// let z = numbOfFlats(numberOfFloor);
// console.log(z);

// ЗАДАНИЕ 6
// let num1 = (Number(prompt('Введи число')));
// function check (a) {
//   return a<0 || a>10?false:true;
// }
// check(num1);

// ЗАДАНИЕ 7
// let num1 = (Number(prompt('Введи число')));
// function mod (a) {
//   return a<0?Math.abs(num1):a;
// }
// mod(num1);

// ЗАДАНИЕ 8
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log (getRandom(0, 10));

// ЗАДАНИЕ 9
// let num1 = (Number(prompt('Введи число')));
// function sqrt (x) {
// return Math.sqrt(x);
// }
// sqrt(num1);
// console.log (sqrt(num1));

// ЗАДАНИЕ 10
// let num1 = (Number(prompt('Введи первое число')));
// let num2 = (Number(prompt('Введи второе число')));
// let num3 = (Number(prompt('Введи третье число')));
// function quadraticEquation (a, b, c) {
//   if(a == 0){
//     return false;
//   }
//   let D = b * b - 4 * a * c;
//   return 'D = ' + D;
//   if(D < 0) {
//    return false;
//   } 
//   if(D === 0) {
//     return ((0 - b) + Math.sqrt(D)) / (2 * a);
//   }
//   else {
//     let res1 = ((0 - b) + Math.sqrt(D)) / (2 * a);
//     let res2 = ((0 - b) - Math.sqrt(D)) / (2 * a);
//       return res1 + ', ' + res2;
//   }
// }
// quadraticEquation(num1, num2, num3);

// ЗАДАНИЕ 11
// let month = (Number(prompt('Номер месяца')));
// function getSeason (num) {
//   if (num>0 && num < 3 || num === 12) {
//     return 'зима'
//   }  if (num>2 && num < 6) {
//     return 'весна'
//   } if (num>5 && num < 9) {
//     return 'лето'
//   } if (num>8 && num < 12) {
//     return 'осень'
//   } else {
//     return 'Таких месяцев не существует'
//   }
// }
// getSeason(month);
// let x = getSeason(month);
// console.log (x);

// ЗАДАНИЕ 12
let country = prompt('Выбери страну: Vietnam, Ukraine, Japan');
let age = Number(prompt('Твой возраст'));
function adult (country, age) {
  switch (country) {
    case 'Vietnam':
      return age>=16?true:false;
      break;
    case 'Ukraine':
      return age>=18?true:false;
      break;
    case 'Japan':
      return age>=20?true:false;
      break;
  } 
}
  adult(country,age);
