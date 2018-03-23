import React from 'react';

const TodoListItem = ({ title, onClick, completed }) => (
  <li onClick={onClick} style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}>
    {title} <button>X</button>
  </li>
);

export default TodoListItem;