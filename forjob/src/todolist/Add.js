import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputvalue: 'keep think'
    }
  }
  render() { 
    return ( 
      <div>
        <h1>我是新增组件</h1>
        <input type='text' value={this.state.inputvalue} onChange={this.inputChange} />
        <button onClick={this.btnClick}>新增</button>
      </div>
    );
  }

  inputChange = (ev) => {
    this.setState({inputvalue: ev.target.value})
  } 

  btnClick = () => {
    const value = this.state.inputvalue;
    this.props.onAdd(value);
    this.setState({
      inputvalue: ''
    })
  }
}

// 组件进行属性校验， propTypes 是固定写法 
Add.propTypes = {
  onAdd: PropTypes.func.isRequired
};
 
export default Add;