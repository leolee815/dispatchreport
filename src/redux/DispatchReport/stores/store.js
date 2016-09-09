import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'


// middleware可以自己定义，例如下面的logger
// 写一个自定义的middleware遵循下面的格式：
// const logger = store => next => action => {
//  // what you do before action,
//      // example: logger. console.log("dispatching", action);
//  let result = next(action);
//      // what you can do after action
//  //console.log('next state', store.getState());
//  return result;
//}
let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

let createStoreWithMiddleware = applyMiddleware(loggerMiddleware,thunkMiddleware)(createStore);

export default createStoreWithMiddleware(rootReducer);
