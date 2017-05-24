import {SET_TODO, ADD_NEW_TODO} from './constants';

export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload
  }
};

export const addNewTodo = (payload) => {
  return {
    type: ADD_NEW_TODO,
    payload
  }
};