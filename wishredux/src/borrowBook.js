/**
 *     Revision   History:
 *        Initial:  2019/12/16         Author:  Wang Huajian
 */

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreate';

class BorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState())
  }
  
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
        <div>
          冷知识：《死生契阔，与子成说。执子之手，与子偕老》是形容战友情的。
        </div>
        <div>
          <Input
            placeholder={this.state.inputValue}
            value={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button type='primary' style={{ backgroundColor: 'red'}} onClick={this.clickBtn}>添加</Button>
        </div>
        <div>
          <List
            size="large"
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item onClick={() => {this.deleteItem(index)}}>{item}</List.Item>}
            style={{ width: '350px', marginTop: '20px'}}
          />
        </div>
      </div>
    );
  }
}
 
export default BorrowBook;
