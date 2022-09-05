
import React from 'react';
import {useState} from 'react';
import {connect} from "react-redux";
import {sendBookReview} from '../../store/api-actions';

const CommentForm = (props) => {

  const {id, onSubmitReview, authorizationInfo} = props;



  const [commentForm, setCommentForm] = useState({
    rating: null, 
    comment: ``,
    username: authorizationInfo.username,
    isPro: authorizationInfo.isPro, 
    avatarUrl: authorizationInfo.avatarUrl
  });

  

  const handleSubmit = (evt) => {
    evt.preventDefault();
 

  onSubmitReview(
    id,
    commentForm
  );

  setCommentForm({
    ...commentForm,
    rating: null,
    comment: ``
  });
};
  

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  return (
    <form action="#" method="post" className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-inner">
      <div className="reviews__rating-form form__rating" onChange={handleFieldChange}>
        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="30" height="26">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="30" height="26">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="30" height="26">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="30" height="26">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="30" height="26">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

      </div>
        <label className="comment-label" htmlFor="comment-input">Ваш комментарий</label>
        <input type="text" className="comment-field" placeholder="Комментарий" required id="comment-input" name="comment" value={commentForm.comment} onChange={handleFieldChange}/>
      </div>
      <button className="comment-submit-button" type="submit">Отправить</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  authorizationInfo: state.authorizationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(id, reviewData) {
    dispatch(sendBookReview(id, reviewData));
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);