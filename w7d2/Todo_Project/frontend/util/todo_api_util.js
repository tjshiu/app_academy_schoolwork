export const fetchTodos = () => {
  return $.ajax('/api/todos', {
    method: 'GET',
    dataType: 'json'
  });
};
