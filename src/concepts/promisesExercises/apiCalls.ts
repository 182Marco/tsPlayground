import {
  IGetMovies,
  IGetMoviesSpecs,
  IGetMoviesCallBackSupport,
  IGetMovieSpecsCallBackSupport,
} from './models';
import * as U from './utils';

const getMovies: IGetMovies = () =>
  fetch(U.getLinkMovies()).then(res => res.json());

const getMoviesSpecs: IGetMoviesSpecs = id =>
  fetch(U.getLinkSpecs(id)).then(res => res.json());

// Old callback-based model
const getMoviesCallBackSupport: IGetMoviesCallBackSupport = callback => {
  fetch(U.getLinkMovies())
    .then(res => res.json())
    .then(data => callback(null, data)) // ✅ First param: error (null), second: data
    .catch(err => callback(err, null)); // ✅ If an error occurs, it is passed as the first param
};

const getMovieSpecsCallBackSupport: IGetMovieSpecsCallBackSupport = (
  userId,
  callback,
) => {
  fetch(U.getLinkSpecs(userId))
    .then(res => res.json())
    .then(data => callback(null, data)) // ✅ First param: error (null), second: data
    .catch(err => callback(err, null)); // ✅ If an error occurs, it is passed as the first param
};

export {
  getMovies,
  getMoviesSpecs,
  getMoviesCallBackSupport,
  getMovieSpecsCallBackSupport,
};
