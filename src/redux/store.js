import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createsagaMiddleware from 'redux-saga';
import reducers from './rootReducer';

const sagaMiddleware = createsagaMiddleware();

export default createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
