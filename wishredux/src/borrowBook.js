import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';


class BorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e) {
    const action = {
      type: 'InputValue',
      value: e.target.value
    }
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState())
  }

  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
        <div>
          我要去图书馆借书，发现一个冷知识《死生契阔，与子成说。执子携手，与子偕老》是形容战友情的。
        </div>
        <div>
          <Input
            placeholder={this.state.inputValue}
            value={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button type='primary'>添加</Button>
        </div>
        <div>
          <List
            size="large"
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
            style={{ width: '350px', marginTop: '20px'}}
          />
        </div>
      </div>
    );
  }
}
 
export default BorrowBook;
