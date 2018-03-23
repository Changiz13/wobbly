import uuid from 'uuid';

export const addTodo = ({ title = '', completed = false } = {}) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    title,
    completed
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_TODO',
  id
});


