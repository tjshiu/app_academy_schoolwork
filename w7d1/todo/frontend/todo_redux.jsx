import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import getAllTodos from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.allTodos = getAllTodos;
  ReactDOM.render(<Root store={store}/>, root);
});
