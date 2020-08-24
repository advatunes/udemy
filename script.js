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
*/

let num = 50;

/*
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
*/

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