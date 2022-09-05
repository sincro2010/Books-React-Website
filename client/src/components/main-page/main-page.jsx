import React, {useEffect} from 'react';
import {booksPropTypes} from '../../common/prop-types.js';
import BooksList from '../books-list/books-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {ActionCreator} from '../../store/action';
import {fetchBooksList} from "../../store/api-actions";



const MainPage = (props) => {
	
	const {books, OnMainPageRender, isDataLoaded} = props;

	useEffect (() => {
	  if (!isDataLoaded) {
				OnMainPageRender();
			}
	}, []);

	if (!isDataLoaded) {
	  return (
			  <LoadingScreen />
			);
	}
	
 return (
		<>
			<div className="page">
				<div className="main">
					<Header />
				<div className="books">
					<BooksList books={books} bookName="MAIN"/>
				</div>
					<Footer />	
			 </div>
				<button className="up-button" type="button">
					↑
					<span className="visually-hidden">Наверх</span>
				</button>
		</div>
	</>
	)
}

MainPage.propTypes = {
	books: booksPropTypes
};

const mapStateToProps = (state) => ({
	books: state.books,
	isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	OnMainPageRender() {
		 dispatch(fetchBooksList());
	}
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
