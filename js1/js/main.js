"use strict"

let numberOfFilms;

numberOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

personalMovieDB.count = numberOfFilms;

const movies = {};

for(let i=1; i < 3; i++) {
  movies[i + prompt( "Один из последних просмотренных фильмов?", "")] = prompt( "На сколько оцените его?", "");
};

console.log(personalMovieDB, movies);
