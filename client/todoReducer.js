import {SET_TODO, ADD_NEW_TODO} from './constants';

const initialState = {
  todo: [],
  value: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TODO:
      return Object.assign(state, {todo: action.payload});

    case ADD_NEW_TODO:
      return {...state, todo: [...state.todo, action.payload]};

    default:
      return state;
  }
}