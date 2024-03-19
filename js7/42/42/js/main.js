"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button"),
  // width = box.clientWidth,
  // height = box.clientHeight;
  // width = box.offsetWidth,
  // height = box.offsetHeight;
  width = box.scrollWidth,
  height = box.scrollHeight;

//console.log(width, height);

btn.addEventListener("click", () => {
  //box.style.height = `${box.scrollHeight}px`;
  // console.log(box.scrollTop);
	console.log(document.documentElement.scrollTop)
});

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
// const style = window.getComputedStyle(box, before);
//console.log(style.display);

// console.log(document.documentElement.clientWidth)
