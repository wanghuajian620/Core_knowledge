/**
 * 主要内容：react 新旧版本的 ref 使用
 */
import React from 'react';

// ref 为字符串的用法（已被弃用）
// export default class Main extends React.Component {
//   handleChange = () => {
//     console.log("this.refs:", this.refs);
//     let a = parseInt(this.refs.a.value || 0);
//     let b = parseInt(this.refs.b.value || 0);
//     this.refs.result.value = a + b;
//   }
//   render() {
//     return (
//       <div onChange={this.handleChange}>
//         <input ref="a" type="text" /> + 
//         <input ref="b" type="text" /> =
//         <input ref="result" type="text" />
//       </div>
//     );
//   }
// }


// ref 回调函数的用法
export default class Main extends React.Component {
  handleChange = () => {
    console.log("this.refs:", this.refs);
    let a = parseInt(this.a.value || 0);
    let b = parseInt(this.b.value || 0);
    this.result.value = a + b;
  }
  render() {
    return (
      <div onChange={this.handleChange}>
        <input ref={ref=>this.a=ref} type="text" /> + 
        <input ref={ref=>this.b=ref} type="text" /> =
        <input ref={ref=>this.result=ref} type="text" />
      </div>
    );
  }
}


// 新增的 ref 用法  React.createRef()
// export default class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state ={};
//     this.inputA = React.createRef();
//     this.inputB = React.createRef();
//     this.inputResult = React.createRef();
//   }
//   handleChange = () => {
//     console.log("this.refs:", this.refs);
//     let a = parseInt(this.inputA.current.value || 0);
//     let b = parseInt(this.inputB.current.value || 0);
//     this.inputResult.current.value = a + b;
//   }
//   render() {
//     return (
//       <div onChange={this.handleChange}>
//          <input ref={this.inputA} type="text" /> + 
//          <input ref={this.inputB} type="text" /> =
//          <input ref={this.inputResult} type="text" />
//       </div>
//     );
//   }
//   componentDidMount() {
//     this.inputA.current.focus();
//     this.inputB.current.focus();
//   }
// }

// ref 的值根据节点的类型而有所不同：

// 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
// 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
// 你不能在函数组件上使用 ref 属性，因为他们没有实例