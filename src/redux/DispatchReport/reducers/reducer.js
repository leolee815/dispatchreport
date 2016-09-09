import { SEARCH,SEARCH_ORDER } from '../actions/actions'

// store中可以定义页面中的初始状态
const initialState = {
    count : 0,      // count = 0
};
//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
export function search(state=initialState.count,action){
  if(action.type=="SEARCH") {
    return state+1;
  }
  return 111
}
export function searchOrder(state=initialState.count,action){
  if(action.type=="SEARCH_ORDER") {
    return state+2;
  }
  return 222
}
