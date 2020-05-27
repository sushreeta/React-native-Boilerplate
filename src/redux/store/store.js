import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {createLogger} from 'redux-logger';
import {rootReducer} from './reducers/index';
import {rootSaga} from './sagas/index';

const sagaMiddleware = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);
