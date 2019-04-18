import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import reducers from './reducers';

export const history = createBrowserHistory ();

function configureStoreProd (initialState) {
  const reactRouterMiddleware = routerMiddleware (history);
  const middlewares = [
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunk,
    // Add other middleware on this line...
    reactRouterMiddleware,
  ];

  return createStore (
    combineReducers ({
      router: connectRouter (history),
      ...reducers,
    }),
    initialState,
    compose (applyMiddleware (...middlewares))
  );
}

function configureStoreDev (initialState) {
  const reactRouterMiddleware = routerMiddleware (history);
  const middlewares = [
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunk,
    // Add other middleware on this line...
    reactRouterMiddleware,
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore (
    combineReducers ({
      router: connectRouter (history),
      ...reducers,
    }),
    initialState,
    composeEnhancers (applyMiddleware (...middlewares))
  );

  return store;
}

const configureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;

export default configureStore;
