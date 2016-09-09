import { combineReducers } from 'redux'
import { search,searchOrder } from './reducer'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
   search,
   searchOrder
})

export default rootReducer
