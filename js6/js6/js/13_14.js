"use strict"

//13

function showFirstMassage(){
	console.log("Hello World!");
}

function showFirstMassage1(text){
	console.log(text);
}

let num = 20;

function showFirstMassage2(text){
	console.log(text);
	num = 10;
}

function showFirstMassage3(text){
	console.log(text);
	let num = 10;
	console.log(num);
}

function showFirstMassage4(text){
	console.log(text);
	console.log(num);
}

function calc(a, b){
	return a + b;
}

function ret(){
	let num = 50;
	return num;
}

const logger = function(){
	console.log("Hello");
};

const calc1 = (a, b) => a + b;

const calc2 =(a, b) =>{
	console.log("1");
	return a + b;
};


//14

const str = "test";
const arr = [1, 2, 3];

const strlen = str.length();
const arrlen = arr.length();

const str2 = str[2];
const STR = str.toUpperCase();

const Str_ = "Test";
const str_ = Str_.toLowerCase();

const fruit = "Some fruit";
const fruit1 = fruit.indexOf("fruit");
const fruit2 = fruit.indexOf("q");

const log = "Hello world";
const logSlice = log.slice(6, 11);
const logSlice1 = log.slice(6, 10);
const logSlice2 = log.slice(6);
const logSlice3 = log.slice(-5, -1);

const logSubsSlice = log.substring(6, 11);

const looSubStr = log.substr(6, 5);

const Num = 12.2;
const NumRound = Math.round(Num);

const test = "12.2";
const test1 = parseInt(test);
const test2 = parseFloat(test);