import {THeroData} from '@HeroSpin/services';

export const SET_HEROES = 'SET_HEROES';

export const setSuperHeroesAction = (heroes: THeroData[]) => ({
  type: SET_HEROES,
  payload: {
    heroes,
  },
});
