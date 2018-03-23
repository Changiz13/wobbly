import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo ? props.todo.title : '',
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title) {
      this.setState(() => ({ error: 'Please provide a title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title
      });
    };
  };  
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;