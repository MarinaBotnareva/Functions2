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
//   alert (enter === ''? false:true); 
// }
// isNotEmpty(text);

// ЗАДАНИЕ 3
// let price = Number(prompt('Цена продукта'));
// let num = Number(prompt('Количество'));
// function calcFullPrice (a, b) {
//   if (isNaN(a) || isNaN(b)){
//     alert(false);
//   }
//   console.log(a*b);
// }
// calcFullPrice(price, num);

// ЗАДАНИЕ 4
// let price = (Number(prompt('Сумма заказа')));
// let money = (Number(prompt('Сколько денег в кошельке')));
// function isEnougnMoney (a, b) {
// alert (a<=b?true:false);
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
//   alert (a<0 || a>10?false:true);
// }
// check(num1);

// ЗАДАНИЕ 7
// let num1 = (Number(prompt('Введи число')));
// function mod (a) {
//   alert (a<0?Math.abs(num1):a);
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
let num1 = (Number(prompt('Введи первое число')));
let num2 = (Number(prompt('Введи второе число')));
let num3 = (Number(prompt('Введи третье число')));
function quadraticEquation (a, b, c) {
  if(a == 0){
    console.log (false);
  }
  let D = b * b - 4 * a * c;
  console.log('D = ' + D);
  if(D < 0) {
    console.log (false);
  } 
  if(D === 0) {
    console.log ((0 - b) + Math.sqrt(D)) / (2 * a);
  }
  else {
    let res1 = ((0 - b) + Math.sqrt(D)) / (2 * a)
    let res2 = ((0 - b) - Math.sqrt(D)) / (2 * a)
      console.log(res1, res2)
  }
}
quadraticEquation(num1, num2, num3);