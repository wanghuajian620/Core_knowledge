/**
 *     Revision   History:
 *        Initial:  2019/12/13         Author:  Wang Huajian
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
