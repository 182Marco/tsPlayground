import {
  getMovies,
  getMoviesSpecs,
  getMoviesCallBackSupport,
  getMovieSpecsCallBackSupport,
} from './apiCalls';

// callback hell syntax
const getByCallBackHellMovie = () => {
  getMoviesCallBackSupport((er, movies) => {
    if (er) {
      return er;
      return;
    }

    if (!movies || !movies.results || movies.results.length < 4) {
      return 'Not enough movies in the results.';
      return;
    }

    getMovieSpecsCallBackSupport(movies.results[3].id, (err, movie) => {
      if (er) {
        return er;
        return;
      }
      return `Movie with callback hell syntax --> ${movie}`;
    });
  });
};

// dot then syntax
const getByThenSintaxMovie = () =>
  getMovies()
    .then(movies => getMoviesSpecs(movies.results[3].id))
    .then(movie => `Movie with then  syntax --> ${movie}`)
    .catch(er => er);

// async await syntax
const getByAsyncSintaxMovie = async () => {
  try {
    const movies = await getMovies();
    const movie = await getMoviesSpecs(movies.results[3].id);
  } catch (er) {
    console.error(er);
  }
};

export { getByCallBackHellMovie, getByThenSintaxMovie, getByAsyncSintaxMovie };
