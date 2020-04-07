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
// export default class Main extends React.Component {
//   handleChange = () => {
//     console.log("this.refs:", this.refs);
//     let a = parseInt(this.a.value || 0);
//     let b = parseInt(this.b.value || 0);
//     this.result.value = a + b;
//   }
//   render() {
//     return (
//       <div onChange={this.handleChange}>
//         <input ref={ref=>this.a=ref} type="text" /> + 
//         <input ref={ref=>this.b=ref} type="text" /> =
//         <input ref={ref=>this.result=ref} type="text" />
//       </div>
//     );
//   }
// }


// 新增的 ref 用法  React.createRef()
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
    this.inputA = React.createRef();
    this.inputB = React.createRef();
    this.inputResult = React.createRef();
  }
  handleChange = () => {
    console.log("this.refs:", this.refs);
    let a = parseInt(this.inputA.current.value || 0);
    let b = parseInt(this.inputB.current.value || 0);
    this.inputResult.current.value = a + b;
  }
  render() {
    return (
      <div onChange={this.handleChange}>
         <input ref={this.inputA} type="text" /> + 
         <input ref={this.inputB} type="text" /> =
         <input ref={this.inputResult} type="text" />
      </div>
    );
  }
  componentDidMount() {
    this.inputA.current.focus();
    this.inputB.current.focus();
  }
}
