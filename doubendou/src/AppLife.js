/**
 * 组件生命周期分三个阶段：
 * 挂载阶段、更新阶段、卸载(销毁)阶段
 */

import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello'
    }
  }
  static getDerivedStateFromProps(props, state) {
    return {
      a: 1
    }
  }
  render() { 
    return (
      <div>

      </div>
    );
  }
}
 
export default App;

/*
挂载阶段：
constructor() 组件初始化，设置state值
static getDerivedStateFromProps(props, state) 获得计算后的state
render()  提供组件的结构
componentDidMount() 组件挂载完毕后调用的，在这个函数中可以请求数据，操作dom，添加事件监听  

更新阶段：
static getDerivedStateFromProps(props, state) 重新计算state的值
shouldComponentUpdate(nextProps, nextState) 性能优化，可返回false 来避免因父组件更新而触发子组件render
render() 重新提供组件的结构  计算出最小变更
getSnapBeforeUpdate(prevProps, prevState) 获得更新前的快照
componentDidUpdate(prevProps, prevState, snapshot) 更新完毕

卸载（销毁）阶段
componentWillUnMount() 销毁，移除监听
*/