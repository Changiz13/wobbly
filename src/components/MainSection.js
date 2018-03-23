import React, { Component } from "react";
import TodoItem from "./TodoItem";
import BottomSection from './BottomSection';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constants/todo-filters";

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

export default class MainSection extends Component {
  state = { filter: SHOW_ALL };

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  };

  handleShow = filter => {
    this.setState({ filter });
  };

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <BottomSection
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <section className="main">
        <ol className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ol>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}