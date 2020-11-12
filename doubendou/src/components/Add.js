import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() { 
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.btnChange}></input>
        <button type="primary" onClick={this.btnClick}>添加</button>
      </div>
    );
  }

  btnChange = (ev) => {
    this.setState({
      inputValue: ev.target.value
    })
  }

  btnClick = () => {
    this.props.onAdd(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }
}
 
export default Add;
