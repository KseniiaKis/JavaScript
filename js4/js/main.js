"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

while (!numberOfFilms || numberOfFilms.length > 50) {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
}

const personalMovieDB = {
  count: Number(numberOfFilms),
  movies: {},
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
        personalMovieDB.genres[i - 1] = prompt( `Ваш любимый жанр под номером ${i}`, "" );
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

personalMovieDB.writeYourGenres(personalMovieDB.forEach);