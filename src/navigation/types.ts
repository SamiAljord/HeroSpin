import {THeroData, TMovieData} from '@HeroSpin/services';

export type TRootStackParamList = {
  Home: undefined;
  Movie: {movie: TMovieData};
  SuperHeroes: {selectSuperHero: (superhero: Pick<THeroData, 'name'>) => void};
};
