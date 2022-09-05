import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getBookReader, getBook} from '../../common/utils.js';
import {Link} from 'react-router-dom';
import CommentForm from '../comment-form/comment-form';
import CommentsList from '../comments-list/comments-list';
import {useParams} from 'react-router-dom';
import {BooksSettings, AppRoute, AuthorizationStatus} from '../../common/const';
import {connect} from 'react-redux';
import {fetchBook, fetchBookReviews} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import ButtonIsFavorite from "../button-is-favorite/button-is-favorite";



const BookPage = (props) => {

  const {
    reviews,
    book,
    activeBookId,
    authorizationStatus,
    isBookLoaded,
    areReviewsLoaded,
    onBookDataRender,
  } = props;

  const {
    title,
    tags,
    image,
    price,
    description,
    isFavorite,
  } = book;

  const {id} = useParams();

  useEffect(() => {
    onBookDataRender(id);
  }, [id]);

  if (!isBookLoaded || !areReviewsLoaded) {
	  return (
			  <LoadingScreen />
			);
	}

  const bookName = `ANNOTATION`;

  return (
    <>
      <div className="page">
        <div className="main">
          <Header />
          <div className="breadcrumbs">
            <Link to={AppRoute.MAIN}>Главная</Link>
            <Link className="active" to={getBook(id)}>{book.title}</Link>
          </div>

          <div className="annotation">
            <div className="annotation-block annotation-card">
              <div className="annotation-features annotation-card-picture">
                <img className="book-annotation-img" src={image} width={`${BooksSettings[bookName].image.width}`} height={`${BooksSettings[bookName].image.height}`} alt={title}/>
              </div>
              

              <div className="annotation-features  annotation-card-subs">
                <div className="book-meta">
                  <h2 className="book-heading">{title}</h2>
                  <div className="book-category">
                    <span className="icon-tag">Категория: </span>
                    <span>{tags}</span>
                  </div>
                </div>
                <div className="book-price">
                  <button className="book-button">Подписка &#8381; {price} </button>
                  <div className="book-icon">
                    <Link to={getBookReader(id)} title={title}>Читать</Link>
                  </div>
                </div>
              </div>

              <div className="annotation-features annotation-card-stats">
                <div className="book-raiting">
                    Рейтинг:
                  <button className="heart" type="button"><span className="likes-number">9</span>
                    <svg width="40" height="40">
                      <use xlinkHref="#light-theme-heart"></use>
                    </svg>
                  </button>
                </div>
                <time dateTime="2019-12-22">Публикация: 22 декабря 2019</time> 
              <ButtonIsFavorite isFavorite={isFavorite} id={id}/>
              </div>
            </div>

            <section className="annotation-block  annotation-text">
              <h2 className="book-heading">Аннотация к книге &quot;{title}&quot;</h2>
              <p>{description}</p>
            </section>

            <section className="annotation-block  comment-block">
              <h2 className="book-heading">Комментарии</h2>
              <CommentsList reviews={reviews}/>
              {
              authorizationStatus === AuthorizationStatus.AUTH &&
              <CommentForm id={id}/>
              } 
            </section>
          </div>
          <Footer />
        </div>

        <button className="up-button" type="button">
          ↑
          <span className="visually-hidden">Наверх</span>
        </button>

      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  book: state.book,
  activeBookId: state.activeBookId,
  isBookLoaded: state.isBookLoaded,
  reviews: state.reviews,
  areReviewsLoaded: state.areReviewsLoaded,
  authorizationStatus: state.authorizationStatus,
});
  
const mapDispatchToProps = (dispatch) => ({
  onBookDataRender(id) {
    dispatch(fetchBook(id));
    dispatch(fetchBookReviews(id));
  },
});

export {BookPage};
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);

