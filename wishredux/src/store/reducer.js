/**
 *     Revision   History:
 *        Initial:  2019/12/17         Author:  Wang Huajian
 */

import { INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType';

const initialState = { 
  inputValue: 'Write Something',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
};

export default (state = initialState, action) => {
  if(action.type === INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // let newState = {...state,inputValue:}
    // console.log(state, action)
    return newState;  
  }

  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
}
