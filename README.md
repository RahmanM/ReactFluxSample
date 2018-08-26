# Sample React and Flux example

Showing the following features:

- Header and details
- Flux and store integration
- Flux actions based on user interactions e.g. adding new todo or deleting todos
- Flux dispatcher and raising events e.g. when adding new todo the list will show it
- Routing
- Validations using reaction-validation (https://github.com/Lesha-spr/react-validation)

  Using this npm package we can add validations to controls. We need to use validation controls instead of html controls
  e.g. <Form> and <Button>. All the custom validation within the Validtions folder will be applied. example:

  ```jsx

      <Form>
        <div className="form-row">
          <label className="col-md-4 m2">
              <Input  validations={[validations.required, 
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

  ```

  - Conditional style with dynamic classes e.g. Favourite and Completed or not
  - Multi component communication e.g. Setting -> Show Completed will update both Favourite and Home page