/**
 *     Revision   History:
 *        Initial:  2019/12/17         Author:  Wang Huajian
 */

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class BorrowBookUi extends Component {
  
  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
        <div>
          冷知识：《死生契阔，与子成说。执子之手，与子偕老》是形容战友情的。
        </div>
        <div>
          <Input
            placeholder={this.props.inputValue}
            value={this.props.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.props.changeInputValue}
          />
          <Button type='primary' style={{ backgroundColor: 'red'}} onClick={this.props.clickBtn}>添加</Button>
        </div>
        <div>
          <List
            size="large"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (<List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>)}
            style={{ width: '350px', marginTop: '20px'}}
          />
        </div>
      </div> 
    );
  }
}
 
export default BorrowBookUi;