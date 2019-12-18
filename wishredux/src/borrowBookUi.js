/**
 *     Revision   History:
 *        Initial:  2019/12/17         Author:  Wang Huajian
 */

import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const BorrowBookUi = (props) => {
  return ( 
    <div style={{ margin: '10px' }}>
      <div>
        冷知识：《死生契阔，与子成说。执子之手，与子偕老》是形容战友情的。
      </div>
      <div>
        <Input
          placeholder={props.inputValue}
          value={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
        />
        <Button type='primary' style={{ backgroundColor: 'red'}} onClick={props.clickBtn}>添加</Button>
      </div>
      <div>
        <List
          size="large"
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
          style={{ width: '350px', marginTop: '20px'}}
        />
      </div>
    </div> 
  );
}
 
export default BorrowBookUi;