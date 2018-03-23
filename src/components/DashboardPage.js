import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopSection from './TopSection';
import MainSection from './MainSection';
import * as TodoActions from '../actions/todos';

const DashboardPage = ({ todos, actions }) => (
  <div>
    <TopSection addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
