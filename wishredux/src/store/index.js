import { createStore } from 'redux';
import borrowBook from './reducer';

const store = createStore(borrowBook);

export default store;
