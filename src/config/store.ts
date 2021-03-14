import { Store, applyMiddleware, compose, createStore } from 'redux';
import rootReducer, { IRootState } from 'src/state/root.reducer';

import DevTools from './dev-tools';
import { isDevelopmentEnvironment } from 'src/utils/node-env.utils';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

const defaultMiddlewares = [thunkMiddleware, promiseMiddleware];

const composedMiddlewares = () =>
    isDevelopmentEnvironment() ? compose(applyMiddleware(...defaultMiddlewares), DevTools.instrument()) : compose(applyMiddleware(...defaultMiddlewares));

const initialize = (initialState?: IRootState): Store => createStore(rootReducer, initialState, composedMiddlewares());

export default initialize;
