import React from 'react';
import Book from '../book/book';
import {connect} from 'react-redux';
import {booksPropTypes} from '../../common/prop-types.js';
import {ActionCreator} from "../../store/action";

const BooksList = (props) => {
  const {books, bookName, setActiveBook, unsetActiveBook} = props;

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          bookName={bookName}
          setActiveBook={setActiveBook}
          unsetActiveBook={unsetActiveBook}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveBook(id) {
    dispatch(ActionCreator.getActiveBook(id));
  },
  unsetActiveBook() {
    dispatch(ActionCreator.getActiveBook(null));
  }
});

BooksList.propTypes = {
  books: booksPropTypes
};

export {BooksList};
export default connect(null, mapDispatchToProps)(BooksList);


