import {AppRoute} from "./const";
import {MAX_NUMBER_STARS} from './const';

export const getNumberOfStars = (rating) => {
  return `${rating / MAX_NUMBER_STARS * 100}%`;
};

export const getBook = (id) => AppRoute.BOOKPAGE.replace(/:id/, id);

export const getBookReader = (id) => AppRoute.READER.replace(/:id/, id);

const deleteBook = (books, deletedBook) => {
  return books.filter((book) => book.id !== deletedBook.id);
};

export const updateBooks = (books, updatedBook) => {
  const bookIndex = books.findIndex((book) => book.id === updatedBook.id);

  return [...books.slice(0, bookIndex),
    updatedBook,
    ...books.slice(bookIndex + 1)];
};

// export const paginateChapters = (chapters, buttonType) => {
//  switch (buttonType) {
//   case ButtonTypes.GO_BACK:
//    return;
//   case ButtonTypes.TURN_PAGE:
//    return;
//   case ButtonTypes.GO_FORWARD:
//    return;
//  };
// };

export const changeFavoriteBooks = (books, updatedBook) => {
  return updatedBook.isFavorite ? [updatedBook, ...books] : deleteBook(books, updatedBook);
};
