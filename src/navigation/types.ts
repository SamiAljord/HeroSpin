import {TMovieData} from '@HeroSpin/services';

export type TRootStackParamList = {
  Home: undefined;
  Movie: {movie: TMovieData};
  SuperHeroes: {selectSuperHero: (superhero: string) => void};
};
