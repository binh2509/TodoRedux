import {SET_TODO, ADD_TODO, UPDATE_TODO, EDIT_TODO, CHANGE_EDIT_TODO_VALUE, FILTER_ACTIVE, FILTER_DONE, FILTER_ALL, FILTER_SEARCH} from './constants';

export const setTodo = (payload) =>{
  return{
    type: SET_TODO,
    payload
  }
};

export const addTodo = (payload) =>{
  return{
    type:ADD_TODO,
    payload
  }
};

export const updateTodo = ({index, todo}) =>{
  return{
    type: UPDATE_TODO,
    payload: {index, todo}
  }
};
export const editTodo = ({index, todo}) =>{
  return{
    type: EDIT_TODO,
    payload: {index, todo}
  }
};

export const changeEditTodoValue = (value)=>{
  return{
    type: CHANGE_EDIT_TODO_VALUE,
    payload: value
  }
};

export const filterDone = () =>{
  return{
    type: FILTER_DONE
  }
};
export const filterActive = () =>{
  return{
    type: FILTER_ACTIVE
  }
};

export const filterAll = () =>{
  return{
    type: FILTER_ALL
  }
};
export const filterSearch = (value) =>{
  return{
    type: FILTER_SEARCH,
    value
  }
};