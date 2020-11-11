import React, { useState } from 'react';
import { produce} from 'immer';

import Add from './Components/Add';
import ListComponent from './Components/List';
import './App.css';

export interface IProps {
  
}
 
export interface IState {
  dataSource: {}[]
}

function App() {
  
  // 声明一个叫dataSource的数组
  const [dataSource, setDataSource] = useState([{id: new Date().getTime(), childValue: 'one day is a good day'}]);

  return (
    <div className='App'>
      <Add parentAdd={handleAdd} />
      <ListComponent
        data={dataSource}
        parentModify={handleModify}
        parentDelete={handleDelete}
      />
    </div>
  );

  // 处理新增计划方法
  function handleAdd(childValue:any) {
    const newDataSource = produce(dataSource, draft => {
      draft.push({id: new Date().getTime(), childValue})
    });
    setDataSource(newDataSource);
  }

  // 处理修改计划的方法
  function handleModify(index:number) {
    let childValue = prompt('修改为');
    const newDataSource = produce(dataSource, draft => {
      if(childValue !== null) {
        draft.splice(index, 1, {id: new Date().getTime(), childValue})
      }
    });
    setDataSource(newDataSource);
  }

  // 处理删除计划的方法
  function handleDelete(index: number) {
    const newDataSource = produce(dataSource, draft => {
      draft.splice(index, 1)
    });
    setDataSource(newDataSource);
  }
}

export default App;
