import React, {useEffect} from 'react';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import BookMenu from '../book-menu/book-menu';
import {ActionCreator} from "../../store/action";
import {logOut} from '../../store/api-actions';
import {fetchBooksList} from "../../store/api-actions";

const Header = (props) => {

const {
		books,
		setActiveBook, 
		unsetActiveBook,
  authorizationInfo,
		authorizationStatus,
		onLogoutClick,
		OnMainPageRender,
		SetTheme,
		theme
} = props;

const {email} = authorizationInfo; 

useEffect (() => {
		OnMainPageRender();
}, []);

const handleUserLogout = () => {
  onLogoutClick();
};

const handleChangeTheme = (theme) => {
	 theme= "light-theme" ? "dark-theme" : "light-theme";
		SetTheme(theme);
};

	return (
		<div className="page-header">
			<div className="nav">
				<ul className="main-menu">
					<li className="top"><Link to={AppRoute.MAIN}>Главная</Link></li>
					<li className="open"> <a href="#">Виктория ОМ</a>
						<ul className="sub-menu">
						  {books.map((book) => (
								  <BookMenu
												key={book.id}
												book={book}
												setActiveBook={setActiveBook}
												unsetActiveBook={unsetActiveBook}/>
								))}
						</ul>
					</li>
					<li><Link to={AppRoute.FAVORITES}>Библиотека</Link></li>
				</ul>
			</div>

			<div className="top-panel">
				<form action="" method="POST">
					<input type="search" name="search" id="search" placeholder="Найти" />
				</form>
				{authorizationStatus === AuthorizationStatus.AUTH ?
				  <>
						  <Link to={AppRoute.PROFILE}>
								  <span className="email-button">{email}</span>
								</Link>
								<button className="theme-button" onClick={handleUserLogout}>Выход</button>
						</>
				  : <Link to={AppRoute.LOGIN}>Вход</Link>
    }
				<button className="theme-button" type="button"  onClick={handleChangeTheme}>Изменить тему</button>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => ({
	 books: state.books,
	 activeBookId: state.activeBookId,
  authorizationInfo: state.authorizationInfo,
  authorizationStatus: state.authorizationStatus,
		theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
		  dispatch(logOut());
		},
		setActiveBook(id) {
			dispatch(ActionCreator.getActiveBook(id));
	},
	 unsetActiveBook() {
			 dispatch(ActionCreator.getActiveBook(null));
	},
	OnMainPageRender() {
	   dispatch(fetchBooksList());
 },
  SetTheme(theme) {
		  dispatch(ActionCreator.changeTheme(theme));
},
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);