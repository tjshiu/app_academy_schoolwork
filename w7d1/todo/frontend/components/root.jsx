import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import TodoListContainer from './todos/todo_list_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <TodoListContainer />
  </Provider>
);

export default Root;
