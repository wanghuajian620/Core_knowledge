import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>我是展示列表组件</h1>
          <ul>
            {
              this.props.datasource.map((item, index) => {
                return (
                  <div key={index}>
                    <li key={item+index}>{item}</li>
                    <button onClick={this.btnDelete.bind(this, index)}>删除</button>
                    <button onClick={this.btnModify.bind(this, index)}>修改</button>
                  </div>
                )
              })
            }
          </ul>
      </div>
    );
  }
  btnDelete(index) {
    this.props.onDelete(index);
  }
  btnModify(index) {
    this.props.onModify(index);
  }
}
 
export default List;