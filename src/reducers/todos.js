import uuid from 'uuid';

const initalState = [
  {
    text: 'Establish company with my soulmate',
    completed: false,
    id: 0
  }
]

export default function todos(state = initalState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    
    case 'EDIT_TODO':
      return state.map(todo => 
        todo.id === action.id ? 
        { ...todo, text: action.text } : 
        todo
      )

    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.id ?
        { ...todo, completed: !todo.completed } :
        todo
      )
    
    case 'COMPLETE_ALL':
      const allCompleted = state.every(todo => todo.completed)
      return stat.map(todo => ({
        ...todo,
        completed: !allCompleted
      }))

    case 'CLEAR_COMPLETED':
      return state.filter(todo => todo.completed === false)
    
    default: 
      return state
  }
};