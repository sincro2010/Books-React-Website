import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus, ButtonTypes} from '../../common/const';
import {changeFavorite} from '../../store/api-actions';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {Link} from 'react-router-dom';
import {getBookReader} from '../../common/utils.js';

// const ButtonIsFavorite = (props) => {
//   const {id, isFavorite, nameButton, authorizationStatus, onClick, redirectToLogin, addToFavorites} = props;

//   const cardFavoriteHandler = () => {
//     if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
//       redirectToLogin(AppRoute.LOGIN);
//     } else {
//       onClick({
//         id,
//         status: Number(!isFavorite)
//       });
//       if (nameButton === `ROOM`) {
//         addToFavorites();
//       }
//     }
//   };

//   const bookmarkClass = isFavorite && ButtonTypes[nameButton].favorite;
//   const bookmarkText = isFavorite ? `In bookmarks` : `To bookmarks`;

//   return (
//     <button
//       onClick={() => cardFavoriteHandler()}
//       className={`${ButtonTypes[nameButton].noFavorite} ${bookmarkClass} button`}
//       type="button"
//       data-testid="button"
//     >
//       <svg className={ButtonTypes[nameButton].icon} width={ButtonTypes[nameButton].width} height={ButtonTypes[nameButton].height}>
//         <use xlinkHref="#icon-bookmark"></use>
//       </svg>
//       <span className="visually-hidden">{bookmarkText}</span>
//     </button>
//   );
// };

// const mapStateToProps = ({USER}) => ({
//   authorizationStatus: USER.authorizationStatus,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onClick(favoriteData) {
//     dispatch(changeFavorite(favoriteData));
//   },
//   redirectToLogin(data) {
//     dispatch(ActionCreator.redirectToRoute(data));
//   },
//   addToFavorites() {
//     dispatch(ActionCreator.changeIsFavoritePlace());
//   }
// });

// ButtonIsFavorite.propTypes = {
//   id: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
//   isFavorite: PropTypes.bool.isRequired,
//   nameButton: PropTypes.string.isRequired,
//   authorizationStatus: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   redirectToLogin: PropTypes.func.isRequired,
//   addToFavorites: PropTypes.func.isRequired,
// };

// export {ButtonIsFavorite};
// export default connect(mapStateToProps, mapDispatchToProps)(ButtonIsFavorite);

const ButtonIsFavorite = (props) => {
  const {id, isFavorite, redirectToLogin, authorizationStatus, onClick, addToFavorites} = props;

  const handlerAddToFavorites = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      redirectToLogin(AppRoute.LOGIN)
    }
    else {
      onClick ({
        id,
        isFavorite: Number(!isFavorite),
        title,
        tags,
        image,
        price,
        description,
        isSubscription,
        rating
        
      });
      addToFavorites();
    }
  }


  const bookmarkText = isFavorite ? `Убрать из библиотеки` : `Добавить в библиотеку`;

  return (
     <div className="add-to-library" >
       <Link to="#" onClick={() => handlerAddToFavorites()}>{bookmarkText}</Link>
     </div>
  );

};

// const mapStateToProps = (state) => {
  
// }

  const mapDispatchToProps = (dispatch) => ({
    onClick(data) {
      dispatch(changeFavorite(data));
    },
    redirectToLogin(url) {
      dispatch(ActionCreator.redirectToRoute(url));
    },
    addToFavorites() {
      dispatch(ActionCreator.changeIsFavoriteBook());
    }
  });

export {ButtonIsFavorite};
export default connect(null, mapDispatchToProps)(ButtonIsFavorite);