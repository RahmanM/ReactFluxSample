import React from 'react';
import TodoStore from '../../store/todostore'
import * as TodoActions from '../../actions/todoactions';

class FavouriteList extends React.Component {

  constructor(){
    super();
    this.state = {
      todos : TodoStore.getFavourites()
    }
  }

  componentDidMount(){
    TodoStore.addListener("ToDoListUpdated", this.updateTodosHandler);
  }

  // NB: Its important that this function to be "Arrow" function otherwise have to use: 
  // this.updateTodosHandler = this.updateTodosHandler.bind(this) in the constructor otherwise there will be memory leaks
  updateTodosHandler = () => {
    this.setState({todos: TodoStore.getFavourites()});
  }

  componentWillUnmount(){
    // NB: Unsubscribe otherwise memory leaks can occuer.
    TodoStore.removeListener("ToDoListUpdated", this.updateTodosHandler);
  }
 
  render = () => (
    <div>
        {this.renderList()}
    </div>
  )

   renderList() {
    return this.state.todos.map((todo) => {
        return (
            <div key={todo.id} >
              <div className="highlighted" >
                <i  className={'btn btn-danger m-2 fa fa-eraser'} onClick={()=> this.updateFavourite(todo.id, false)}></i>
                <span key={todo.id}>
                  {todo.taskTitle} 
                </span>         
              </div>
            </div>
        );
    });
  } 

  updateFavourite = (id, isFavourite) => {
    TodoActions.updateFavourite(id, isFavourite);
  }

}

export default FavouriteList;
