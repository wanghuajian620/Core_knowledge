import React, { Component } from 'react';

import Add from './components/Add';
import List from './components/List';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{id: new Date().getTime(), val: 'one day is a good day'}]
    }
  }
  
  render() { 
    return (
      <div style={{padding: '50px'}}>
        <Add onAdd={this.btnAdd} />
        <List data={this.state.dataSource} onDelete={this.btnDelete} onModify={this.btnModify} />
      </div>
    );
  }

  btnAdd = (val) => {
    this.setState({
      dataSource: [...this.state.dataSource, {
        id: new Date().getTime(),
        val
      }]
    })
  }

  btnDelete = (index) => {
    // console.log("接收到了要删除的下标index:", index);
    const newDataSource = [...this.state.dataSource];
    newDataSource.splice(index, 1);
    this.setState({
      dataSource: newDataSource
    })
  }

  btnModify = (index) => {
    let modifyValue = prompt('修改为');
    const newDataSource = [...this.state.dataSource];
    if(modifyValue !== null) {
      newDataSource.splice(index, 1, {id: new Date().getTime(), val: modifyValue});
    }
    this.setState({
      dataSource: newDataSource
    })
  }
}
 
export default App;
