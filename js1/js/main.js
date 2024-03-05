"use strict"

let numberOfFilms;

numberOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for(let i=1; i < 3; i++) {
  personalMovieDB.movies[i + prompt( "Один из последних просмотренных фильмов?", "")] = prompt( "На сколько оцените его?", "");
};

console.log(personalMovieDB);
