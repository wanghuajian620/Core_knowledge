import React, { Component } from 'react';

class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleClick = () => {
    // console.log(this.props.index)
    // this.props.list = [];
    this.props.deleteItem(this.props.index);
  }
  render() { 
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }
}
 
export default ListContent;
