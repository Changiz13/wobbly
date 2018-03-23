const todosReducerDefaultState = []

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'REMOVE_TODO':
      return state.filter(({ id }) => id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
    default:
      return state;
  }
};