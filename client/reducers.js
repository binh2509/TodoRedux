import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

export const makeRootReducer = () =>{
  return combineReducers ({
    todo : todoReducers
  })
};
export default makeRootReducer;
