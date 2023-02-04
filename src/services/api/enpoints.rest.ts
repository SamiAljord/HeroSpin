import {apiRoutes, MOVIE_TYPE, OMDB_API_KEY} from './configs.rest';
import ApiManager from './manager.rest';
import {ESearchMovieParams, TGetMovieResponse, THeroData} from './types.rest';

export const apiEndpoints = {
  getAllSuperHeroes: (): Promise<THeroData[]> => {
    const api = new ApiManager();
    return api.addRoute(apiRoutes.getAllSuperHeroes).get().send() as Promise<
      THeroData[]
    >;
  },
  getMovie: (superhero: string): Promise<TGetMovieResponse> => {
    const api = new ApiManager();
    return api
      .addRoute(apiRoutes.getMovie)
      .addParams([
        {
          key: ESearchMovieParams.search,
          value: superhero,
        },
        {
          key: ESearchMovieParams.type,
          value: MOVIE_TYPE,
        },
        {
          key: ESearchMovieParams.apikey,
          value: OMDB_API_KEY,
        },
      ])
      .get()
      .send() as Promise<TGetMovieResponse>;
  },
};
