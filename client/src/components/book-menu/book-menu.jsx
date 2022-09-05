
import React from 'react';
import {booksPropTypes} from '../../common/prop-types.js';
import {getBook} from '../../common/utils.js';
import {Link} from 'react-router-dom';


const BookMenu = (props) => {
  const {book, setActiveBook} = props;

  const {
   id,
   title,
   tags,
   image,
   price,
   description
 } = book;


	const mouseClick = () => setActiveBook(book.id);
 

  return (
   <li onClick={mouseClick} ><Link to={getBook(id)}>{title}</Link></li>
  );
};

BookMenu.propTypes = {
 books: booksPropTypes
};
export default BookMenu;

