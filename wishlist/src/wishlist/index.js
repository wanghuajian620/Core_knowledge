import React, { Component } from 'react';
import ListContent from './ListContent';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
    }
  }
  writeWish = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  addWish = () => {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ''
    })
  }

  deleteItem = (index) => {
    let list = this.state.list;
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  render() { 
    return ( <React.Fragment>
      <input type='text' value={this.state.value} onChange={this.writeWish}></input>
      <button type='button' style={{ backgroundColor: 'red', color: 'white' }} onClick={this.addWish}>新增2020wish清单</button>
      <ul>
        {this.state.list.map((item, index) => {
          return (
            // <li
            //   key={item + index}
            //   onClick={() => {this.deleteItem(index)}}
            // >
            //   {item}
            // </li>
           
            <ListContent
              key={item+index}
              content={item}
              index={index}
              // list={this.state.list}
              deleteItem={this.deleteItem}
            />
          )
        })}
      </ul>
    </React.Fragment> );
  }
}
 
export default WishList;
