import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class BorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
        <div>
          我要去图书馆借书，发现一个冷知识《死生契阔，与子成说。执子携手，与子偕老》是形容战友情的。
        </div>
        <div>
          <Input placeholder='Write book name' style={{ width: '250px', marginRight: '10px' }} />
          <Button type='primary'>查找</Button>
        </div>
        <div>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            style={{ width: '350px', marginTop: '20px'}}
          />
        </div>
      </div>
    );
  }
}
 
export default BorrowBook;
