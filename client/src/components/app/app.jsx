import React, {createContext, useState}  from 'react';
import MainPage from '../main-page/main-page';
import {booksPropTypes} from '../../common/prop-types.js';
import {AppRoute} from '../../common/const';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignIn from '../sign-in/sign-in';
import BookPage from '../book-page/book-page';
import Reader from '../reader/reader';
import Favorites from '../favorites/favorites';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';

export const ThemeContext = createContext(null);

const App = (props) => {

  const {theme} = props;

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr== "light-theme" ? "dark-theme" : "light-theme"));
  // }
  // const [theme, setTheme] = useState("light-theme");


  return (
        <ThemeContext.Provider value={{theme}}>
        <div className={theme}>
 
    <Router history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MAIN} element={<MainPage  />}/>
        <Route path={AppRoute.LOGIN} element={<SignIn />} />
        <Route path={AppRoute.BOOKPAGE} element={ <BookPage />} />
        <Route path={AppRoute.READER} element={ <Reader />} />
        <Route path={AppRoute.FAVORITES} element={ <Favorites />} />
        <Route path={AppRoute.ERROR} element={<NotFoundScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>

       </div>
       </ThemeContext.Provider>
  );
};

const mapStateToProps = (state) => ({
   theme: state.theme,
});

App.propTypes = {
  books: booksPropTypes
};
export {App};
export default connect(mapStateToProps, null)(App);