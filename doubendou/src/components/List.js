import React from 'react';

function List(props) {
  return (
    <div>
      <ul>
        {props.data.map(({id, val}, index) => {
          return (
            <div key={id+index}>
              <li key={id}>{val}</li>
              <button type="primary" onClick={() => btnClick1(index)}>删除</button>
              <button type="primary" onClick={() => btnClick2(index)}>修改</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
  function btnClick1(index) {
    props.onDelete(index);
  }
  function btnClick2(index) {
    props.onModify(index);
  }
}

export default React.memo(List);