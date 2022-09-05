
import React from 'react';
import {booksPropTypes} from '../../common/prop-types.js';
import {getBook} from '../../common/utils.js';
import {Link} from 'react-router-dom';
import {BooksSettings} from '../../common/const';

const Book = (props) => {
  const {book, bookName, setActiveBook, unsetActiveBook} = props;
  const {
    id,
    title,
    tags,
    image,
    price,
    description
  } = book;


	const mouseOver = () => setActiveBook(book.id);
	const mouseOut = () => unsetActiveBook(); 

  return (
    <article className="book" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <h1 className="book-heading">{title}</h1>
      <div className="book-meta">
        <div className="book-category">
          <span className="book-icon icon-tag">Категория: </span>
          <span>{tags}</span>
        </div>
        <div className="book-price">
          <span className="book-icon icon-time">Подписка</span>
          <span> &#8381;{price}</span>
        </div>
      </div>
      <div className="book-content">
        <figure className="book-figure">
		        <Link to={getBook(id)}>
          		<img className="book-img" src={image} width={`${BooksSettings[bookName].image.width}`} height={`${BooksSettings[bookName].image.height}`} alt={title}/>
										</Link>
          <figcaption>
            <p>{description}</p>
          </figcaption>
        </figure>
        <button className="book-button"><Link to={getBook(id)}>{title}</Link></button>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: booksPropTypes
};

export default Book;

