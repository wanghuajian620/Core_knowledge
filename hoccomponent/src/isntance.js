/**
 * 主要内容： 组件实例
 */
import React, { Component } from 'react'

export default class AA extends Component {
  render() {
    console.log("this:", this);
    return (
      <div>
        <h2>测试什么是组件实例</h2>
        <h3>React 官方说 this 就是组件实例</h3>
        <img src='./instance.png' alt="this 组件实例"></img>
      </div>
    );
  }
}

//在编写的组件类中，this就是指的实例。它对于存储本地状态和对生命周期事件做出反应非常有用。

// 功能组件根本没有实例。类组件有实例，但您永远不需要直接创建组件实例--React负责这一点。

// this: AA {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}