import {THeroData} from '@HeroSpin/services';
import {TSuperHeroesActionTypes} from './types';

export const SET_HEROES = 'SET_HEROES';

export const setSuperHeroesAction = (
  heroes: THeroData[],
): TSuperHeroesActionTypes => ({
  type: SET_HEROES,
  payload: {
    superheroes: heroes,
  },
});
