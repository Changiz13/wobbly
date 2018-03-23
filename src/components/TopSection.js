import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';

class TopSection extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <div>
        <TodoTextInput 
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}

export default TopSection;  

