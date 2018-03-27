import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import getAllTodos from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    todos: getAllTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    receiveTodos: (todos) => dispatch(receiveTodos(todos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
