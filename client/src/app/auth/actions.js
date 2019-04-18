import Axios from 'axios';
import {
  LOGOUT,
  DEAUTHORIZE,
  AUTHORIZE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './actionTypes';

export function logout () {
  return function (dispatch) {
    return Axios.post ('/api/auth/logout').then (() =>
      dispatch ({
        type: LOGOUT,
      })
    );
  };
}

export function login (email, password) {
  return function (dispatch) {
    return Axios.post ('/api/auth/login', {
      email,
      password,
    })
      .then (response => {
        dispatch ({
          type: LOGIN_SUCCESS,
          payload: {
            id: response.data._id,
            email: response.data.email,
            name: response.data.name,
          },
        });
        return response.data;
      })
      .catch (e => {
        dispatch ({
          type: LOGIN_FAILED,
        });
        throw e;
      });
  };
}

export function getAuthUser () {
  return function (dispatch) {
    return Axios (`/api/auth/loggedInUser`)
      .then (response => {
        dispatch (
          authorize ({
            id: response.data._id,
            email: response.data.email,
            name: response.data.name,
          })
        );
        return response.data;
      })
      .catch (() => dispatch (deauthorize ()));
  };
}

export function deauthorize () {
  return {
    type: DEAUTHORIZE,
  };
}

export function authorize({id, email, name}) {
  return {
    type: AUTHORIZE,
    payload: {
      id,
      email,
      name,
    },
  };
}
