export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
});

export const editTodo = (id, text) => ({
  type: 'TOGGLE_TODO',
  id,
  text
});

export const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id
});

export const completeAll = () => ({
  type: 'COMPLETE_ALL'
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED'
});
