/**
 * setState是同步还是异步
 * 在react事件中是异步操作
 * 在setTimeout和自定义的dom事件中是同步操作
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

  componentDidMount() {
    // 自己定义的dom事件也是同步修改
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
      console.log("this.state.count:", this.state.count);
    }) 
  }
  btnAction = () => {
    // 异步修改
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log("this.state.count:", this.state.count); 

    // 同步修改
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log("this.state.count:", this.state.count);
    }, 0);
  }
}
 
export default App
