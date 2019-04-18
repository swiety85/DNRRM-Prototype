import {
  LOGOUT,
  LOGIN_FAILED,
  DEAUTHORIZE,
  LOGIN_SUCCESS,
  AUTHORIZE,
} from './actionTypes';

const initialState = {
  isLoggedIn: false,
  id: null,
  email: null,
  name: null,
};

export default function authReducer (state = initialState, action) {

  switch (action.type) {
    case LOGOUT:
    case LOGIN_FAILED:
    case DEAUTHORIZE:
      return Object.assign ({}, state, initialState);

    case LOGIN_SUCCESS:
    case AUTHORIZE:
      return Object.assign ({}, state, {
        isLoggedIn: true,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
      });

    default:
      return state;
  }
}
