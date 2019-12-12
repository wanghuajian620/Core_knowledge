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
  if(action.type === 'InputValue') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // let newState = {...state,inputValue:}
    // console.log(state, action)
    return newState;  
  }
  return state;
}
