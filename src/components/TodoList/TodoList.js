import React from 'react';
import styles from './TodoList.css';
import TodoStore from '../../store/todostore'
import * as TodoActions from '../../actions/todoactions';

class TodoList extends React.Component {

  constructor(){
    super();
    this.state = {
      todos : TodoStore.getAllTodos()
    }
  }

  componentDidMount(){
    TodoStore.addListener("ToDoListUpdated", this.updateTodosHandler);
  }

  // NB: Its important that this function to be "Arrow" function otherwise have to use: 
  // this.updateTodosHandler = this.updateTodosHandler.bind(this) in the constructor otherwise there will be memory leaks
  updateTodosHandler = () => {
    this.setState({todos: TodoStore.getAllTodos()});
  }

  componentWillUnmount(){
    // NB: Unsubscribe otherwise memory leaks can occuer.
    TodoStore.removeListener("ToDoListUpdated", this.updateTodosHandler);
  }

  render() {
    return (
      <div  className="details">
          {this.renderList()}
      </div>
    )
  }

  renderList() {
    return this.state.todos.map((todo) => {
        return (
            <div key={todo.id} >
              <div className="highlighted" >
                <i  className="btn btn-danger m-2 fa fa-eraser" onClick={()=> this.deleteTodo(todo.id)}></i>
                <i  className={this.getFavouriteClass(todo)} onClick={()=> this.updateFavourite(todo.id, todo.favourite)}></i>
                <i  className={this.getCompletedClass(todo)} onClick={()=> this.updateCompleted(todo.id, todo.done)}></i>
                <span key={todo.id}>
                  {todo.taskTitle} 
                </span>         
              </div>
            </div>
        );
    });
  }

  getFavouriteClass = (todo) => todo.favourite ? 'm-2 fa fa-star btn btn-warning' : 'm-2 fa fa-star btn btn-primary';
  getCompletedClass = (todo) => todo.done ? 'm-2 fa fa-check btn btn-info' : 'm-2 fa fa-times red btn btn-info';

  deleteTodo = (id) => {
    TodoActions.deleteTodo(id);
  }

  updateFavourite = (id, isFavourite) => {
    TodoActions.updateFavourite(id, !isFavourite);
  }

  updateCompleted = (id, done) => {
    TodoActions.updateCompleted(id, !done);
  }

}

export default TodoList;
