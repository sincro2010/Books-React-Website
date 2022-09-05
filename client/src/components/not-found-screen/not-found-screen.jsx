import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute } from '../../common/const';

const NotFoundScreen = () => {
  return (
    <div className="page light-theme">
      <div className="main">
        <Header />
        <div className="books">
          <section data-testid="404">
            <h1>404.Страница не найдена</h1>
            <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default NotFoundScreen;

