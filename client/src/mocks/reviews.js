import {AVATAR_URL} from '../common/const';

export default [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      id: 1,
      isPro: false,
      name: `Sofia`,
      avatar_url: `${AVATAR_URL}?rnd=${Math.random()}`,
    }
  }, {
    comment: `Bad.`,
    date: `2020-04-08T14:12:56.569Z`,
    id: 2,
    rating: 1,
    user: {
      id: 2,
      isPro: false,
      name: `Tiago`,
      avatar_url: `${AVATAR_URL}?rnd=${Math.random()}`,
    }
  }, {
    comment: `It's OK`,
    date: `2020-05-08T14:13:56.569Z`,
    id: 3,
    rating: 3,
    user: {
      id: 3,
      isPro: false,
      name: `Azeem`,
      avatar_url: `${AVATAR_URL}?rnd=${Math.random()}`,
    }
  }
];

