import React from 'react';
import { Button } from 'antd';
import './List.css';

function ListComponent(props:any) {
  return (
    <div>
      <ul>
        {
          props.data.map(({id, childValue}:any, index:number) => {
            return (
              <div key={id+index}>
                <li key={id}>{childValue}</li>
                <Button 
                  type='primary'
                  className='List-button'
                  onClick={() => updateClick(index)} 
                >
                  修改计划
                </Button>
                <Button
                  type='primary'
                  className='List-button'
                  onClick={() => deleteClick(index)}
                >
                  删除计划
                </Button>  
              </div>  
            );
          })
        }
      </ul>  
    </div>
  );

  // 修改方法；parentModify 父组件传过来的方法
  function updateClick(index:number) {
    props.parentModify(index) 
  }

  // 删除方法；parentDelete 父组件传过来的方法
  function deleteClick(index:number) {
    props.parentDelete(index)
  }
}

export default React.memo(ListComponent);
