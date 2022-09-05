import browserHistory from "../../browser-history";
import {ActionType} from "../action";

export const redirect = (_store) => (dispatch) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return dispatch(action);
};
