"use strict";

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };

// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// let ivan = new User("Ivan", 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(5));

const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
// });

// btn.addEventListener("click", function () {
//   this.style.background = "red";
// });

btn.addEventListener("click", (e) => {
  e.target.style.background = "red";
});

const obj = {
  num: 5,
  sayNumbere: function () {
    const say = () => {
      // console.log(this);
      console.log(this.num);
    };

    say();
  },
};

obj.sayNumbere();

// const double = (a) => {
//   return a * 2;
// };

// const double = (a) => a * 2;

const double = (a) => a * 2;

console.log(double(4));
