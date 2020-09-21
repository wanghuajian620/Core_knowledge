import React from 'react';
import ReactDOM from 'react-dom';
// 新旧版本的ref使用
// import Main from './ref';
// 高阶组件场景一、属性代理的三个案例
// import NormalComponent from './hoc/wrapperComponent';
// 高阶组件场景二、反向继承之渲染劫持，改变组件树的样式
import NormalComponent from './hoc/renderHijack';
// import AA from './isntance';

ReactDOM.render(
  <React.Fragment>
    <NormalComponent />
    {/* <AA /> */}
    {/* <Main /> */}
  </React.Fragment>,
  document.getElementById('root')
);
