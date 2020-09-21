import React, { useState } from 'react';
import { Input, Button } from 'antd';

function Add(props:any) {
  
  // 声明一个叫inputValue的变量
  const [inputValue, setInputValue] = useState('hooks练习');
  
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e:any) => setInputValue(e.target.value)}
        style={{width: 300, marginRight: 18}}
      />
      <Button type='primary' onClick={() => btnClick()}>新增计划</Button>
    </div>
  );
  
  // 增加事件方法；parentAdd父组件传过来的方法
  function btnClick() {
    props.parentAdd(inputValue);
    setInputValue('');
  }

}

export default Add;
