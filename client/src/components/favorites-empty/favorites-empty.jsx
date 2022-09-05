import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute } from '../../common/const';

const FavoritesEmpty = () => {

  return (
<div className="page light-theme">
  <div className="main">
    <Header />
    <div className="books">
      <section data-testid="404">
        <h1 className="visually-hidden">Подписки (пусто)</h1>
          <div className="subscriptions__status-wrapper">
            <b className="subscriptions__status">У ещё нет сохранённых книг</b>
            <p className="subscriptions__status-description">Сохраните книги в библиотеку, чтобы было легче их найти</p>
          </div>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </section>
    </div>
    <Footer />
  </div>
</div>
  );
};

export default FavoritesEmpty;
