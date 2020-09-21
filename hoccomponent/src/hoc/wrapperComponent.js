/**
 * 主要内容：高阶组件使用（使用场景）属性代理、反向代理
 */

import React, {Component} from 'react';

// 属性代理又分三个场景案例：
// 案例一 获取被包裹组件的refs,可直接更改被包裹组件的显示内容
const HOC = (WrapperComponent) => {
  return class extends Component {
    wrapper = React.createRef();
    componentDidMount() {
      console.log(this.wrapper.current.state);
      this.wrapper.current.setState({ text: '通过高阶组件改变的内容' });
    }
    render() {
      return (
        <WrapperComponent {...this.props} ref={this.wrapper} />
      );
    }
  }
}

// 使用高阶组件时有两种写法
// 写法一如下
class NormalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Shang Hai'
    }
  }
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default HOC(NormalComponent);

// 写法二如下(暂不支持修饰器写法，需要安装插件)
@HOC
class NormalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Shang Hai'
    }
  }
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}
export default NormalComponent;
 



// 案例二 抽象state，把非受控组件转变为受控组件
const HOC = (WrapperComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }
    }
    onChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      return (
        <WrapperComponent {...this.props} value={this.state.value} onChange={this.onChange} />
      );
    }
  }
}

// 函数式组件不能用装饰器，装饰器只能修饰类
// const NormalComponent = (props) => <input {...props} type="text"/>
// export default HOC(NormalComponent);

// 案例三 增加新的ui内容
const HOC =(WrapperComponent) => {
  return class extends Component {
    static defaultProps = {
      label: 'gaojiezujian'
    }
    render() {
      console.log("this.props:", this.props);
      return (
        <div>
          <label>{this.props.label}</label>
          <WrapperComponent {...this.props}/>
        </div>
      );
    }
  }
}

class NormalComponent extends Component {
  render() {
    return (
      <input type="text" />
    );
  }
}

export default HOC(NormalComponent);
