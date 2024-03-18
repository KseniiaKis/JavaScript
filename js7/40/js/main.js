"use strict";

//const now = new Date(2023, 3, 18, 20);
//const now = new Date(0);
const now = new Date();

now.setHours(18, 40);
console.log(now);
//new Date.parse("2024-03-18")

//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 1; i < 10000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
