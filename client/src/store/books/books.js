import {ActionType} from '../action';

const initialState = {
  activeBookId: null,
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_BOOK:
      return {
        ...state,
        activeBookId: action.payload,
      };
  }

  return state;
};

export {books};