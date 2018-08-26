import React, { Component } from 'react'
import TodoHeader from '../components/TodoHeader/TodoHeader';
import TodoList from '../components/TodoList/TodoList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Todo Header</h1>
          <TodoHeader />

          <br/>

          <h1>Todo Details</h1>
          <TodoList />
      </div>
    )
  }
}
