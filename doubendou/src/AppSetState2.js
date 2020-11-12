/**
 * setState 接收两个参数
 * 第一个参数是对象{}时，多次的异步setState在更新前会合并
 * 第一个参数是函数时，多次的异步setState会防止被合并
 */

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  render() { 
    return (
      <div style={{ textAlign: 'center'}}>
        <p>count: {this.state.count}</p>
        <button type="primary" onClick={this.btnAction}>按钮</button>
        <button id='btn'>按钮1</button>
      </div>
    );
  }

  
  btnAction = () => {
    // 多次的异步setState更新前会进行合并

    /*// 异步修改
    this.setState({
      count: this.state.count + 1  // 这里的this.state.count = 1
    }, () => {
      // 异步修改后才会触发的回调
      console.log("第一次异步修改this.state.count:", this.state.count) // 2
    });

    this.setState({
      count: this.state.count + 1  // 这里的this.state.count = 1
    }, () => {
      console.log("第二次异步修改this.state.count:", this.state.count) // 2
    });

    this.setState({
      count: this.state.count + 1  // 这里的this.state.count = 1
    }, () => {
      console.log("第三次异步修改this.state.count:", this.state.count) // 2
    });
    console.log("this.state.count:", this.state.count); // 值为1  全是异步修改，同步打印得到的值肯定还是原来的值1 */

    // 多次的异步setState,防止更新前合并
    this.setState((preState, props) => {
      return {
        count: preState.count + 1 // 2
      }
    }, () => {
      console.log("第一次异步修改this.state.count:", this.state.count); // 4
    });

    this.setState((preState, props) => {
      return {
        count: preState.count + 1 // 3
      }
    }, () => {
      console.log("第二次异步修改this.state.count:", this.state.count); // 4
    });

    this.setState((preState, props) => {
      return {
        count: preState.count + 1 // 4
      }
    }, () => {
      console.log("第三次异步修改this.state.count:", this.state.count); // 4
    });
    
    console.log("this.state.count:", this.state.count); // 1
  }
}
 
export default App;
