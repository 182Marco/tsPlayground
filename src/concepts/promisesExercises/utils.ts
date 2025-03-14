import { IGetLink, IGetLinkById } from './models';

const apikey = '5f6d881d6af75a5cb6855a550e2cd3d2';
const basicUrl = 'https://api.themoviedb.org/3';
const type = 'movie';
const BasicUrlMoreDataSingleEL = 'https://api.themoviedb.org/3';
const language = 'it-IT';

const getLinkMovies: IGetLink = () =>
  `${basicUrl}/${type}/popular?api_key=${apikey}&language=${language}&page=1`;

const getLinkSpecs: IGetLinkById = id =>
  `${BasicUrlMoreDataSingleEL}/movie/${id}/videos?api_key=${apikey}&language=${language}`;

export { getLinkMovies, getLinkSpecs };
