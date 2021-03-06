import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }else{
      return false
    }
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  render() {
    // console.log('reder----挂载中') 
    return ( 
    <li onClick={this.handleClick}>Hello{this.props.name}，你的本月清单：{this.props.content}</li>
    );
  }
}

ListContent.defaultProps = {
  name: '华健'
}

ListContent.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
}

export default ListContent;
