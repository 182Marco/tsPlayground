import {
  getMovies,
  getMoviesSpecs,
  getMoviesCallBackSupport,
  getMovieSpecsCallBackSupport,
} from './apiCalls';

// callback hell syntax
const getByCallBackHellMovie = () => {
  getMoviesCallBackSupport((err, movies) => {
    if (err) {
      console.log(err);
      return;
    }

    if (!movies || !movies.results || movies.results.length < 4) {
      console.log('Not enough movies in the results.');
      return;
    }

    getMovieSpecsCallBackSupport(movies.results[3].id, (err, movie) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Movie with callback hell syntax -->', movie);
    });
  });
};

// dot then syntax
const getByThenSintaxMovie = () =>
  getMovies()
    .then(movies => getMoviesSpecs(movies.results[3].id))
    .then(movie => console.log('movie with then syntax --> :', movie))
    .catch(err => console.error(err));

// async await syntax
const getByAsyncSintaxMovie = async () => {
  try {
    const movies = await getMovies();
    console.log(`marcom ---> movies: `, movies);
    const movie = await getMoviesSpecs(movies.results[3].id);
  } catch (er) {
    console.error(er);
  }
};

export { getByCallBackHellMovie, getByThenSintaxMovie, getByAsyncSintaxMovie };
