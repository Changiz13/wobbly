import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const AddTodo = () => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(undefined, mapDispatchToProps)(AddTodo);

