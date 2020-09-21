import React, { Component } from 'react';
import Add from './todolist/Add';
import List from './todolist/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  render() { 
    return (
      <div>
        <Add onAdd={this.btnAdd} />
        <List datasource={this.state.data} onDelete={this.btnDelete} onModify={this.btnModify} />
      </div> 
    );
  }
  btnAdd = (abc) => {
    // console.log('abc:', abc);
    this.setState({
      data: [...this.state.data, abc]
    })
  }
  btnDelete = (ppp) => {
    const alldata = this.state.data; // 这么写是有问题的，需要const alldata = [...this.state.data]
    alldata.splice(ppp, 1);
    this.setState({
      data: [...alldata]
    })
  }
  btnModify = (mmm) => {
    const alldata = this.state.data; // 同上
    let value = prompt("请输入修改的内容")
    alldata.splice(mmm, 1, {value});
    this.setState({
      data: [...alldata]
    })
  }
}

export default App;
