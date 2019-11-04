import { SET_CONNECTION  } from './actions';


export const socketReducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case SET_CONNECTION :
      return {
        ...state,
        openConnection: action.payload
      };

    default:
      return state;
  }
};
