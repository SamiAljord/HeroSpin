import {THeroData} from '@HeroSpin/services';
import {SET_HEROES} from './actions';

type TSetSuperHeroesAction = {
  type: typeof SET_HEROES;
  payload: {superheroes: THeroData[]};
};
export type TSuperHeroesActionTypes = TSetSuperHeroesAction;
