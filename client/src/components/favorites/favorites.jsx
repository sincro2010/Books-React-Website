import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {fetchFavoriteBooksList} from "../../store/api-actions";
import Header from '../header/header';
import Footer from '../footer/footer';
import BooksList from '../books-list/books-list';

const Favorites = (props) => {

  const {favoriteBooks, isFavoriteBooksLoaded, onFavoritePageRender} = props;

  useEffect(() => {
    if (!isFavoriteBooksLoaded) {
      onFavoritePageRender();
    }
  }, [isFavoriteBooksLoaded]);

  return (
    <>
     {favoriteBooks.length > 0 ?  
     <div className="page">
       <div className="main">
        <Header />
       <div className="books books_favorites">
         {/* {favoriteBooks.map((book) => {
           return (
             <Book 
               key = {book.id}
               book = {book}
               bookName={bookName}
               setActiveBook={setActiveBook}
               unsetActiveBook={unsetActiveBook}
             />
           );
         })} */}
        <BooksList books={favoriteBooks} bookName="FAVORITES"/>
       </div>
        <Footer />	
       </div>
       <button className="up-button" type="button">
        ↑
        <span className="visually-hidden">Наверх</span>
       </button>
     </div> : <FavoritesEmpty /> }
   </>

 )
};

const mapStateToProps = (state) => ({
  favoriteBooks: state.favoriteBooks,
  isFavoriteBooksLoaded: state.isFavoriteBooksLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritePageRender() {
    dispatch(fetchFavoriteBooksList());
  },
});


export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);