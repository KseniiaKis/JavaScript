"use strict"

let numberOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", "");

while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms.length > 50 ) {
	numberOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", "");
}

const personalMovieDB = {
	count: Number(numberOfFilms),
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count < 10){
	console.log('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
};

for (let i = 1; i < 3; i++){
	let a = prompt( "Один из последних просмотренных фильмов?", "");
	while( a == "" || a == null || a.length > 50 ){
		a = prompt( "Один из последних просмотренных фильмов?", "");
	};
	let b = prompt( "На сколько оцените его?", "")
	while( b == "" || b == null || b.length > 50 ){
		b = prompt( "На сколько оцените его?", "")
	};
	personalMovieDB.movies[a] = b;
};

let i = 1;
while (i < 3){
	let a = prompt( "Один из последних просмотренных фильмов?", "");
	while( a == "" || a == null || a.length > 50 ){
		a = prompt( "Один из последних просмотренных фильмов?", "");
	};
	let b = prompt( "На сколько оцените его?", "")
	while( b == "" || b == null || b.length > 50 ){
		b = prompt( "На сколько оцените его?", "")
	};
	personalMovieDB.movies[a] = b;
	i++
};

i = 1;
do{
	let a = prompt( "Один из последних просмотренных фильмов?", "");
	while( a == "" || a == null || a.length > 50 ){
		a = prompt( "Один из последних просмотренных фильмов?", "");
	};
	let b = prompt( "На сколько оцените его?", "")
	while( b == "" || b == null || b.length > 50 ){
		b = prompt( "На сколько оцените его?", "")
	};
	personalMovieDB.movies[a] = b;
	i++
}	
while(i < 3);

console.log(personalMovieDB);