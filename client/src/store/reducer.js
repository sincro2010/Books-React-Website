import {ActionType} from './action';
import {AuthorizationStatus} from '../common/const';
import {Status} from '../common/const'
import {changeFavoriteBooks, updateBooks} from '../common/utils';

const initialState = {
  activeBookId : null,
  books: [],
  isDataLoaded : false,
  reviews: [],
  areReviewsLoaded: false,
  reader: [],
  isReaderLoaded: false,
  book: {},
  isBookLoaded: false,
  fontSize: 14,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
  statusReviewSending: Status.PENDING,
  currentPage: 1,
  theme: `light-theme`,
  favoriteBooks: [],
  isFavoriteBooksLoaded: false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        isDataLoaded: true,
      };

    case ActionType.GET_FAVORITE_BOOKS:
      return {
        ...state,
        favoriteBooks: action.payload,
        isFavoriteBooksLoaded: true,
    };

    case ActionType.CHANGE_BOOK:
      return {
        ...state,
        activeBook: action.payload
      };

      case ActionType.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      }

    case ActionType.GET_READER:
      return {
        ...state,
        reader: action.payload,
        isReaderLoaded: true
      };
  
    case ActionType.GET_BOOK_PAGE:
      return {
        ...state,
        book: action.payload,
        isBookLoaded: true
      };

    case ActionType.GET_ACTIVE_BOOK:
      return {
        ...state,
        activeBookId: action.payload,
      };

    case ActionType.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        areReviewsLoaded: true
      };

    case ActionType.CHANGE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        };

    case ActionType.AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload,
        };

    case ActionType.STATUS_REVIEW_SENDING:
      return {
        ...state,
        statusReviewSending: action.payload,
      };

    case ActionType.CHANGE_CHAPTER:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ActionType.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case ActionType.UPDATE_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBooks: changeFavoriteBooks(state.favoriteBooks, action.payload),
       
      };

    case ActionType.CHANGE_IS_FAVORITE_BOOK:
      return {
        ...state,
        book: Object.assign({}, state.book, {isFavorite: !state.book.isFavorite})
      };
  }

  return state;
};

export {reducer};
