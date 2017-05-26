import {SET_TODO, ADD_TODO, CHANGE_EDIT_TODO_VALUE, EDIT_TODO, UPDATE_TODO} from './constants'

export const setTodo = (payload) =>{
  return {
    type : SET_TODO,
    payload
  }
};
export const addTodo = (payload) =>{
  return {
    type : ADD_TODO,
    payload
  }
};

export const updateTodo = ({index, todo}) =>{
  return {
    type : UPDATE_TODO,
    payload: {index, todo}
  }
};

export const editTodo = ({index, todo}) =>{
  return {
    type : EDIT_TODO,
    payload: {index, todo}
  }
};

export const changeEditTodoValue = (value) =>{
  return {
    type : CHANGE_EDIT_TODO_VALUE,
    payload: value
  }
};
