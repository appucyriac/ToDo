import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore,dispatch } from 'redux'
import todos from'./reducers/todos.js'
import { TextField} from 'rmwc/TextField';
import '../node_modules/material-components-web/dist/material-components-web.css';
import { Button } from 'rmwc/Button';
import addToDo from './actions/addToDo';
let store = createStore(todos, ['Sample']);

class App extends Component {

constructor(props) {
    super(props);
}

addNewItem(){
store.dispatch(
addToDo('Finish task X')
); 
console.log(store.getState());
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To do List</h1>
        </header>
        <body>
          <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="newButton" onClick={this.addNewItem.bind(this)}>Add New</Button>
        </body>
      </div>
    );
  }
}

export default App;
