import React, { Component } from 'react'
import * as TodoActions from '../actions/todoactions';
import Store from '../store/todostore'

export default class Settings extends Component {

  constructor(){
    super();
    this.state = {
      checked : Store.getShowCompleted()
    }
  }

  render() {
    return (
      <div>
          Show Completed? <input defaultChecked={this.state.checked} type="checkbox" onChange={(e)=> this.checkChanged(e)}></input>
      </div>
    )
  }

  checkChanged(e){
    var show = e.target.checked;
    this.setState({checked:show});
    TodoActions.showCompleted(show);
  }

}
