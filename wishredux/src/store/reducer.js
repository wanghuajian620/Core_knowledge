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

function borrowBook(state = initialState, action) {
  return state;
}

export default borrowBook;
