import {TMarvelSuperHero} from '@HeroSpin/services';
import {SET_HEROES} from './actions';

type TSetSuperHeroesAction = {
  type: typeof SET_HEROES;
  payload: {superheroes: TMarvelSuperHero[]};
};
export type TSuperHeroesActionTypes = TSetSuperHeroesAction;
