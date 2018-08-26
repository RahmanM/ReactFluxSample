import React from 'react';

// NB: importing all functions from the file
import * as TodoActions from '../../actions/todoactions';
import * as validations from '../../validations/validations';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';

class TodoHeader extends React.Component {

  constructor(){
    super();

    this.state = {
      inputValue: ''
    }
  }
  
  render = () => {
    return (
      <Form>
        <div className="form-row">
          <label className="col-md-4 m2">
              <Input  validations={
                      [
                        validations.required, 
                        ()=> validations.minLength(this.state.inputValue, 3), 
                        ()=> validations.maxLength(this.state.inputValue, 20)
                      ]} 
                value= {this.state.inputValue} 
                onChange={(e) => this.setInputValue(e)} 
                className="form-control" placeholder="Todo description" />
          </label>

          <div className="col-md-1">
            <Button 
                type="button" onClick={e => this.onAddNewTodo(e)} 
                className="form-control btn btn-primary">Add Todo</Button>
          </div>
        </div>
      </Form>
    );
  }

  onAddNewTodo = (e) => {
    TodoActions.createTodo(this.state.inputValue);
    this.setState({inputValue:''});   // This is the preferred way as is consitent
    //this.inputbox.value = ''        // Note: this also works though had to set the ref="someref"
  }

  setInputValue = (e) => {
    this.setState({inputValue: e.target.value});
  }

}

export default TodoHeader;
