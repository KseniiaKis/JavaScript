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

//HW
function showMyDB(){
	if (personalMovieDB.privat == false) {
			console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for(let i = 1; i < 4; i++){
		personalMovieDB.genres = prompt( "Ваш любимый жанр под номером "+ i, "")
	};
}
