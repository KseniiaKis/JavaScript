"use strict";

const personalMovieDB = {
  count: 0,
  movies: [],
  actors: {},
  genres: [],
  privat: false,

  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function (callback) {
    for (let i = 1; i < 4; i++) {
      while (!personalMovieDB.genres[i - 1]) {
        personalMovieDB.genres[i - 1] = prompt(
          `Ваш любимый жанр под номером ${i}`,
          ""
        );
      }
    }
    callback();
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    } else {
      console.log("error");
    }
  },

  forEach: function () {
    for (let i = 1; i < 4; i++) {
      console.log(`Любимый жанр ${i} - это ${personalMovieDB.genres[i - 1]}`);
    }
  },
};

const btn = document.querySelector(".button__inner button");
const form = document.querySelector(".form__inner");
const myFilms = document.createElement("div");

let i = 0;
let input = document.querySelector(".namefilm__inner input");
let inputDarling = document.querySelector(".checkbox__inner input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.length > 21) {
    personalMovieDB.movies[i] = input.value.substr(0, 21) + "...";
  } else {
    personalMovieDB.movies[i] = input.value;
  }
  if (inputDarling.checked) {
    console.log("Добавляем любимый фильм");
  }
  personalMovieDB.movies.sort();
  myFilms.innerHTML = "Мои фильмы:</br>";
  myFilms.classList.add("myFilms");
  form.append(myFilms);

  for (let j = 0; j < personalMovieDB.movies.length; j++) {
    let node = document.createElement("li");
    node.classList.add("myFilmsLi");
    node.innerHTML = `${personalMovieDB.movies[j]}`;
    let del = document.createElement("button");
    del.innerHTML = "delete";
    node.append(del);

    del.addEventListener("click", function (e) {
      e.target.parentNode.remove();
      personalMovieDB.movies.splice(j - 1, 1);
      console.log(personalMovieDB);
    });
    myFilms.append(node);
  }

  i++;
  input.value = "";
  inputDarling.checked = false;
});
