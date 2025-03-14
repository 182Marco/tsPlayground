type IGetLink = () => string;
type IGetLinkById = (n: number) => string;

type IGetMovies = () => Promise<any>;
type IGetMoviesSpecs = (n: number) => Promise<any>;

// Support for callBack hell
type Callback<T> = (error: Error | null, data: T | null) => void;
type IGetMoviesCallBackSupport = (
  callback: Callback<Record<string, any>>,
) => void;
type IGetMovieSpecsCallBackSupport = (
  userId: number,
  callback: Callback<Record<string, any>>,
) => void;

export {
  IGetLink,
  IGetLinkById,
  IGetMovies,
  IGetMoviesSpecs,
  IGetMoviesCallBackSupport,
  IGetMovieSpecsCallBackSupport,
};
