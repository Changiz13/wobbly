import React from 'react';
import TodoListItem from './TodoListItem';
import { addTodo } from '../actions/todos';
import { connect } from 'react-redux';

const TodoList = (props) => (
<div>
  <ul>
    {
      props.todos.length === 0 ? (
        <li>No tasks</li>
      ) : (
        props.todos.map((todo) => {
          return <TodoListItem key={todo.id} {...todo} />
        })
      )
    }
  </ul>
</div>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);