import { createStore as createReduxStore } from 'redux';
import makeRootReducer from './reducers';

const createStore = (initialState = {}) => {

  const store = createReduxStore(
    makeRootReducer(),
    initialState
  );

  return store;
};

export default createStore;
