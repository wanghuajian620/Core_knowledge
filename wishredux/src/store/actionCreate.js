/**
 *     Revision   History:
 *        Initial:  2019/12/17         Author:  Wang Huajian
 */

import { INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionType';

// 改变输入框的值
export const changeInputAction = (value) => ({
  type: INPUT_VALUE,
  value
})

// 添加当前的输入框事件
export const addItemAction = () => ({
  type: ADD_ITEM,
})

// 删除当前项事件
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
