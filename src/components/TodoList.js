import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { addTodo, toggleTodo } from '../actions/todos';
import { connect } from 'react-redux';

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  onToggle = (todo) => {
    this.props.toggleTodo(todo);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.length === 0 ? (
              <li>No tasks</li>
            ) : (
              this.props.todos.map((todo) => {
                return <TodoListItem key={todo.id} {...todo} onClick={this.onToggle} />
              })
            )
          }
        </ul>
      </div>
    );
  }
};

/* const TodoList = (props) => (
<div>
  <ul>
    {
      props.todos.length === 0 ? (
        <li>No tasks</li>
      ) : (
        props.todos.map((todo) => {
          return <TodoListItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
        })
      )
    }
  </ul>
</div>
); */

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (todo) => dispatch(toggleTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);