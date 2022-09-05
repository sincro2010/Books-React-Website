
import React, {useEffect, useRef} from 'react';
import Header from "../header/header";
import PropTypes from "prop-types";
import {logIn} from '../../store/api-actions';
import {AuthorizationStatus, AppRoute} from '../../common/const';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";


const SignIn = (props) => {
  const {onSubmit, authorizationStatus, redirectToMain} = props;

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      isPro: 0,
      avatarUrl: `https://i.pravatar.cc/128`,
    });
    redirectToMain(AppRoute.MAIN);
  };


return (
  <div className="page light-theme">
    <div className="main">
      <Header />
      <div className="registration">
        <h1 className="signup-heading">Регистрация</h1>
        <form className="reg-form" action="#" method="post" onSubmit={handelSubmit}>
          <div className="login-inner">
            <label className="login-label" htmlFor="reg-name">Ваш логин</label>
            <input className="name" type="text" id="reg-name" name="reg-name" placeholder="Логин" required ref={usernameRef}/>
          </div>
          <div className="email-inner">
            <label className="email-label" htmlFor="reg-email">Ваш email</label>
            <input className="email" type="text" id="reg-email" name="reg-name" placeholder="email" required ref={emailRef}/>
          </div>
          <div className="password-inner">
            <label className="password-label" htmlFor="reg-pass">Ваш пароль</label>
            <input className="password" type="password" id="reg-pass" name="reg-pass" placeholder="Пароль" required ref={passwordRef}/>
          </div>

          <div className="security">
            <div className="security-bar"></div>
          </div>
          <input className="show-password visually-hidden" type="checkbox" id="show-pass"/>
          <label className="checkbox-label" htmlFor="show-pass">Показать пароль</label>
          <button className="submit-button" type="submit">Зарегистрироваться</button>
        </form>
      </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(logIn(data));
  },
  redirectToMain(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
