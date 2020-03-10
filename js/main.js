'use strict';
// var leftBorderWidth = 1;
// let second =2;
// const pi = 3.14;

// console.log(leftBorderWidth);


var number = 5;
var string = "Hello"; //= Строка
var sym = Symbol(); //=
var boolean = true; //= логический либо да либо нет
null; //=в коде не чего несуществует
undefined; //= в коде значения ни какого нету
var obj = {}; //= коллекция данных, может содержать данные или функции

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log (persone.name);
// массив
let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

//alert("hello World");

// let answer = confirm("Are you here?");

// console.log(answer);
// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

console.log(incr--);
console.log(decr--);
console.log(5%2);
console.log("2" == 2); //сравнение тут будет true
console.log("2" === 2); // сравнение false

let isChecked = true,
    isClose = true;
console.log(isChecked && isClose); //&& оператор И
console.log(isChecked || isClose); //|| оператор или

let myHeading = =document.querySelector('h1');
myHeading.textContent = 'Hello Aslanbek!';
