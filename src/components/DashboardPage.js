import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopSection from './TopSection';
import * as TodoActions from '../actions/todos';

const DashboardPage = ({ todos, actions }) => (
  <div>
    <TopSection addTodo={actions.addTodo} />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
