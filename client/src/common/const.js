export const AVATAR_URL = `https://i.pravatar.cc/128`;
export const MAX_NUMBER_STARS = 5;

export const BooksSettings = {
  MAIN: {
    article: `book`,
    image: {
      imageClass: `book-img`,
      width: 120,
      height: 175,
    },
    info: ``
  },
  ANNOTATION: {
    article: `annotation`,
    image: {
      imageClass: `book-annotation-img`,
      width: 220,
      height: 321,
    },
    info: ``
  },
  FAVORITES: {
    article: `favorites__card`,
    image: {
      imageClass: `favorites__image-wrapper`,
      width: 150,
      height: 110,
    },
    info: `favorites__card-info`
  }
};

export const AppRoute = {
  LOGIN: `/login`,
  MAIN: `/`,
  LOGOUT: `/logout`,
  FAVORITES: `/favorites`,
  ERROR: `/error`,
  BOOKPAGE: `/book/:id`,
  READER: `/reader/:id`,
  BOOKS: `/books`,
  PROFILE: `/profile`,
};

export const DEFAULT_BOOK = `Замуж за коня`;
export const MAX_NUMBER_BUTTONS = 7;

export const ButtonTypes = {
  GO_BACK: `prev`,
  TURN_PAGE: `turn-page`,
  GO_FORWARD: `next`,
};


export const AuthorizationStatus = {
  AUTH: `auth`,
  NO_AUTH: `no_auth`,
};

export const Status = {
  PENDING: `pending`,
  SUCCESS: `success`,
  ERROR: `status/error`,
};

export const HttpCode = {
  NOT_FOUND: 404
};