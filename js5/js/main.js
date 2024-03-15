"use strict";

const part = document.getElementById("part"),
  btns = document.getElementsByTagName("button"),
  blue_circles = document.getElementsByClassName("blue_circle"),
  red_circles = document.querySelector(".red_circles"),
  red_circless = red_circles.querySelectorAll(".red_circle"),
	red_circle = red_circles.querySelector(".red_circle");

//part.style.backgroundColor = "orange";
//part.style.width = "500px";

const num = 500;
part.style.cssText = `background-color: orange; width: ${num}px`;

btns[1].style.borderRadius = "100%";

blue_circles[0].style.backgroundColor = "red";

//for (let i = 0; i < red_circles.length; i++ ) {
//	red_circles[i].style.backgroundColor = "blue";
//}

red_circless.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
//const text = document.createTextNode("Тут была я");

div.classList.add("black");

document.body.append(div);

//document.querySelector(".red_circles").append(div);

//red_circles.append(div);
//red_circles.appendChild(div);

//red_circles.prepend(div);

//blue_circles[0].before(div);

//blue_circles[0].after(div);

//red_circles.insertBefore(div, red_circless[0]);

//blue_circles[0].remove();

//red_circles.removeChild(red_circless[0]);

//blue_circles[0].replaceWith(red_circless[0]);

red_circles.replaceChild(blue_circles[0], red_circless[0])

//div.innerHTML = "Hi!";
div.innerHTML = "<h1>Hi!</h1>";

//div.textContent = "Hi!";

//div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
//div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
//div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");