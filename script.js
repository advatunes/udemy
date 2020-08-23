const numberOfFilms = +promt('Сколько фильмов?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt('один из последний фильмов?', ''),
      b = promt('на сколько оцениваете?', ''),
      c = promt('один из последний фильмов?', ''),
      d = promt('на сколько оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
