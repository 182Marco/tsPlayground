import { MovieResponse, VideoResponse } from './responseModels';

type IGetLink = () => string;
type IGetLinkById = (n: number) => string;

type IGetMovies = () => Promise<MovieResponse>;
type IGetMoviesSpecs = (n: number) => Promise<VideoResponse>;

// Support for callBack hell
type Callback<T> = (error: Error | null, data: T | null) => void;
type IGetMoviesCallBackSupport = (callback: Callback<MovieResponse>) => void;
type IGetMovieSpecsCallBackSupport = (
  userId: number,
  callback: Callback<VideoResponse>,
) => void;

export {
  IGetLink,
  IGetLinkById,
  IGetMovies,
  IGetMoviesSpecs,
  IGetMoviesCallBackSupport,
  IGetMovieSpecsCallBackSupport,
};
