import React from 'react';

const TodoList = ({todos}) => {
  return (
      <div>
        <ol>
          {todos.map((todo) => <li>{todo.title}: {todo.body}</li>)}
        </ol>
      </div>
  );
};

export default TodoList;
