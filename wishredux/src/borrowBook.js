/**
 *     Revision   History:
 *        Initial:  2019/12/16         Author:  Wang Huajian
 */

import React, { Component } from 'react';

import store from './store';
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreate';
import BorrowBookUi from './borrowBookUi';

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
  componentDidMount() {
    axios.get('https://www.bing.com')
    .then((res) => {
      const data = res.data
      const action = getListAction(data)
      store.dispatch(action)
    })
  }
  render() { 
    return ( 
      <BorrowBookUi
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}
 
export default BorrowBook;
