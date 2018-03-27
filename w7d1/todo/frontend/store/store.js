import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/root_reducer';
import { receiveTodo, receiveTodos } from '../actions/todo_actions';

const configureStore = () => createStore(reducer, applyMiddleware(logger));

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
export default configureStore;
