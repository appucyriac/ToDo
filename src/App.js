import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore,dispatch } from 'redux'
import todos from'./reducers/todos.js'
import { TextField} from 'rmwc/TextField';
import '../node_modules/material-components-web/dist/material-components-web.css';
import { Button } from 'rmwc/Button';
import DataTables from 'material-ui-datatables';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {addToDo,removeToDo,toggleToDo} from './actions/actions';

let store = createStore(todos);
const TABLE_COLS=[
   {
    key: 'id',
    label: 'Id',
    render: (id, all) => <i class="fa fa-check-circle-o checkCircle" aria-hidden="true"></i>,
    className:"rowId"
  },
     {
    key: 'task',
    label: 'Task',
    className:"rowId"
  },
  {
    key: 'status',
    label: 'Status',
    className:"rowId"
  }];
let TABLE_DATA=[],id=0;

class App extends Component {

constructor(props) {
    super(props);
    store.getState().map((value)=>{
       let task={
        task:value.text
       }
       TABLE_DATA.push(task);
    })
        this.state = {
                  newItem:"",
                  id:0,
                  Data:TABLE_DATA,
                  completedClick:false
                  };
}

addNewItem(){
store.dispatch(
addToDo(this.state.newItem)
); 
this.pendingTasks();
this.setState({Data:TABLE_DATA});
}
removeItem(id){
store.dispatch(toggleToDo(id)); 
this.pendingTasks();
this.setState({Data:TABLE_DATA});
}
showCompleted(){
  TABLE_DATA=[];
      store.getState().map((value)=>{
       if(value.completed){
       let task={
        task:value.text,
        status:value.Completed,
        id:value.id
       }
       TABLE_DATA.push(task);}
    })
this.setState({Data:TABLE_DATA});
this.setState({completedClick:true});
}
pendingTasks(){
    TABLE_DATA=[];
      store.getState().map((value)=>{
       if(!value.completed){
       let task={
        task:value.text,
        status:value.Completed,
        id:value.id
       }
       TABLE_DATA.push(task);}
    })
    this.setState({Data:TABLE_DATA});
}
handleClick(tableRow, tableColumn, dataItem, dataItemField){
   if(!this.state.completedClick)
     this.removeItem(dataItem.id);
   this.setState({completedClick:false});
}
handleChange(event){
  this.setState({newItem:event.target.value});
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Notes</h1>
        </header>
        <body>
          <TextField label="New Task" onChange={this.handleChange.bind(this)}/>
          <Button raised theme={['secondary-bg', 'text-success']} id="newButton" onClick={this.addNewItem.bind(this)}>Add New</Button>
          <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="removeButton" onClick={this.showCompleted.bind(this)}>Completed</Button>
          <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="removeButton" onClick={this.pendingTasks.bind(this)}>Pending</Button>
            <MuiThemeProvider>
            <DataTables
              height={'auto'}
              selectable={false}
              columns={TABLE_COLS}
              data={this.state.Data}
              showCheckboxes={false}
              onCellClick={this.handleClick.bind(this)}
              rowSizeLabel=""
              rowSize="0"
              page="0"
              rowSizeList=""
            />
            </MuiThemeProvider>
        </body>
      </div>
    );
  }
}

export default App;
