import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import TodoForm from './TodoForm';

export class AddTodo extends Component {
  onSubmit = (todo) => {
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(undefined, mapDispatchToProps)(AddTodo);

