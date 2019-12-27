import React, { Component } from 'react';
import axios from 'axios';
import ListContent from './ListContent';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
    }
  }
  writeWish = () => {
    this.setState({
      value: this.input.value
    })
  }

  addWish = () => {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ''
    })
    // console.log(this.ul.querySelectorAll('li').length) 因setState是异步，所以获取的length值总是少1。解决办法就是在回调函数中取
  }

  deleteItem = (index) => {
    let list = this.state.list;
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {console.log('axios 获取数据成功:' + JSON.stringify(res))})
      .catch((error) => {
        console.log('axios 获取数据失败:' + error)
      })
  }

  render() { 
    return ( <React.Fragment>
      <input
        type='text'
        value={this.state.value}
        onChange={this.writeWish}
        ref={a => this.input=a}
      />
      <button type='button' style={{ backgroundColor: 'red', color: 'white' }} onClick={this.addWish}>新增2020wish清单</button>
      <ul ref={ul => this.ul = ul}>
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
