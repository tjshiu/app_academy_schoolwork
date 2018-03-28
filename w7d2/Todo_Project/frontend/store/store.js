import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import { thunkMiddleware } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(logger, thunkMiddleware));
  window.store = store;
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};




export default configureStore;
