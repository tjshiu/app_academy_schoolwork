import {RECEIVE_TODOS, RECIEVE_TODO} from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_TODOS':
      let newMultiTodos = merge({}, action.todos);
      return newMultiTodos;
    case 'RECEIVE_TODO':
      // let newSingleTodo = [...state, action.todo];
      let newSingleTodo = {[action.todo.id]: action.todo};
      let newObject = merge({}, state, newSingleTodo);
      return newObject;
    default:
      return state;
  }
};

export default todosReducer;
