export const ActionType = {
  CHANGE_BOOK: `books/changeBook`,
  GET_READER: `data/getReader`,
  GET_BOOKS: `books/getBooks`,
  GET_ACTIVE_BOOK: `books/getActiveBook`,
  GET_BOOK_PAGE: `data/getBookPage`,
  GET_REVIEWS: `data/getReviews`,
  CHANGE_FONT_SIZE: `data/changeFontSize`,
  REQUIRED_AUTHORIZATION: `users/requiredAuthorization`,
  AUTHORIZATION_INFO: `user/authorizationInfo`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  STATUS_REVIEW_SENDING: `data/statusReviewSending`,
  CHANGE_CHAPTER: `data/changeChapter`,
  CHANGE_THEME: `data/changeTheme`,
  GET_FAVORITE_BOOKS: `data/getFavoriteBooks`,
  CHANGE_IS_FAVORITE_BOOK: `data/changeIsFavoriteBook`,
  UPDATE_FAVORITE_BOOK: `data/updateFavoriteBook`
};

export const ActionCreator = {
  changeBook: (selectedBook) => ({
    type: ActionType.CHANGE_BOOK,
    payload: selectedBook,
  }),
  getReader: (reader) => ({
    type: ActionType.GET_READER,
    payload: reader,
  }),
  getBooks: (books) => ({
    type: ActionType.GET_BOOKS,
    payload: books,
  }),
  getFavoriteBooks: (favoriteBooks) => ({
    type: ActionType.GET_FAVORITE_BOOKS,
    payload: favoriteBooks,
  }),
  getBookPage: (book) => ({
    type: ActionType.GET_BOOK_PAGE,
    payload: book,
  }),
  getActiveBook: (activeBookId) => ({
    type: ActionType.GET_ACTIVE_BOOK,
    payload: activeBookId,
  }),
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),
 
 requireAuthorization: (status) => ({
   type: ActionType.REQUIRED_AUTHORIZATION,
   payload: status,
 }),
 authorizationInfo: (info) => ({
  type: ActionType.AUTHORIZATION_INFO,
  payload: info,
}),
redirectToRoute: (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
}),
statusReviewSending: (data) => ({
  type: ActionType.STATUS_REVIEW_SENDING,
  payload: data
}),
changeChapter: (value) => ({
  type: ActionType.CHANGE_CHAPTER,
  payload: value
}),
changeTheme: (theme) => ({
  type: ActionType.CHANGE_THEME,
  payload: theme
}),
changeIsFavoriteBook: () => ({
  type: ActionType.CHANGE_IS_FAVORITE_BOOK,
}),
updateFavoriteBook: (book) => ({
  type: ActionType.UPDATE_FAVORITE_BOOK,
  payload: book
}),
};
