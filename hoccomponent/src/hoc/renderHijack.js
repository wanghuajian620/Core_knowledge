/**
 * 主要内容：高阶组件使用（使用场景）反向代理（反向继承）
 */

import React, {Component} from 'react';

// 高阶组件 
// 由于Enchance 类继承了WrapperComponent 类，而不是WrapperComponent 类继承其他类，所以称之为反向继承。
// 反向继承相对于属性代理更加灵活，可以进行一些个性化操作。
const HOC = (WrapperComponent) => {
  return class Enchance extends WrapperComponent {
    constructor(props) {
      super(props);
      this.state = {
        text: '高阶组件的反向代理'
      }
    }
    render() {
      // return super.render();
      // 以下三行代码便是渲染劫持的具体实现，修改由render方法输出的React组件树。
      const domTree = super.render();
      const style = {color: 'red'};
      return React.cloneElement(domTree, {style});
    }
  }
}

// 普通组件
class NormalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '这是个普通组件'
    }
  }
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default HOC(NormalComponent);
