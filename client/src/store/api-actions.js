import {ActionCreator} from './action.js';
import {AuthorizationStatus, AppRoute, HttpCode, Status} from '../common/const.js';
import {adaptBookToClient} from './adapter.js';

export const fetchBooksList = () => (dispatch, _getState, api) => (
  api.get('http://localhost:3002/books/get')
    .then(({data}) => dispatch(ActionCreator.getBooks(data)))
    .catch(() => {})
);

export const fetchFavoriteBooksList = () => (dispatch, _getState, api) => (
  api.get('http://localhost:3002/favorites/get')
    .then(({data}) => dispatch(ActionCreator.getFavoriteBooks(data)))
    .catch(() => {})
);

export const fetchBook = (id) => (dispatch, _getState, api) => (
  api.get(`${'http://localhost:3002/books/get'}/${id}`)
    .then((book) => dispatch(ActionCreator.getBookPage(book.data)))
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.NOT_FOUND:
          dispatch(ActionCreator.redirectToRoute(AppRoute.ERROR));
          break;
        default:
          dispatch(ActionCreator.setErrorMessage(response.status));
          break;
      }
    })
);

export const fetchBookReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${'http://localhost:3002/comments/get'}/${id}`)
    .then(({data}) => dispatch(ActionCreator.getReviews(data)))
    .catch(() => {})
);

export const sendBookReview = (id, {rating, comment, username, isPro, avatarUrl}) => (dispatch, _getState, api) => {
  api.post(`${'http://localhost:3002/comments/post'}/${id}`, {rating, comment, username, isPro, avatarUrl})
    .then(({data}) => dispatch(ActionCreator.getReviews(data)))
    .then(() => dispatch(ActionCreator.statusReviewSending(Status.SUCCESS)))
    .catch(() => dispatch(ActionCreator.statusReviewSending(Status.ERROR)));
};

export const fetchBookReader = (id) => (dispatch, _getState, api) => (
  api.get(`${'http://localhost:3002/reader/get'}/${id}`)
    .then(({data}) => dispatch(ActionCreator.getReader(data)))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get('http://localhost:3002/login/get')
     .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
     .catch(() => {})
);

export const logIn = ({username, email, password, isPro, avatarUrl}) => (dispatch, _getState, api) => (
  api.post('http://localhost:3002/login/post', {username, email, password, isPro, avatarUrl})
    .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
    .then(() => dispatch((ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get('http://localhost:3002/login/get')
  .then(() => dispatch(ActionCreator.authorizationInfo({})))
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
  .catch(() => {})
);

export const changeFavorite = ({id, isFavorite, title, image, tags, price, description, rating, isSubscription}) => (dispatch, _getState, api) => (
  api.put('http://localhost:3002/favorites/update', {id, isFavorite, title, image, tags, price, description, rating, isSubscription}
  )
    .then((data) => dispatch(ActionCreator.updateFavoriteBook(data)))
    .catch((err) => {
      console.log(err);
      
    })
    
);
