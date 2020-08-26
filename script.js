"use strict";
/*
if (4 == 9) {
    console.log('ok');
} else {
    console.log('error');
}



if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('много');
} else {
    console.log ('ok');
}

(num === 50) ? console.log('ok') : console.log('error');


const num = 50;

switch (num) {
    case 49: 
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;
}


let num = 50;


while (num < 55) {
    console.log(num);
    num++;
}


do {
    console.log(num);
    num++;
}
while (num < 55);


for (i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
    
}


const numberOfFilms = +prompt('Сколько фильмов?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('один из последний фильмов?', ''),
        b = prompt('на сколько оцениваете?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('посмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log("ошибка");
}


let num = 20;

function showFirstMessage (text) {
    console.log(text);
    num = 10;
    console.log(num);
}

showFirstMessage("hello world");
console.log(num);

 /*
 function calc (a, b) {
    return (a + b);
}

console.log(calc(4, 4));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("hello");
};

logger();

const calc = (a, b ) => 
{
    console.log("2");
    return a + b;
}

const str = "test";
// console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str);

const fruit = "some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "hello world";

console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};




function rememberMyFlims() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из последний фильмов?', ''),
            b = prompt('на сколько оцениваете?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFlims();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('посмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log("ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
       }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
