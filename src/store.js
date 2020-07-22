//3.创建仓库

import {createStore,applyMiddleware} from 'redux';

//引入路由托管中间件
import {routerMiddleware} from 'react-router-redux'

//引入异步中间件
import thunk from "redux-thunk"

//引入日志中间件
import logger from "redux-logger"

//引入历史记录
import {createBrowserHistory} from 'history'

//引入纯函数
import combineReducers from './modules'

export const history=createBrowserHistory()

//输出创建的store
export default createStore(combineReducers,applyMiddleware(routerMiddleware(history),thunk,logger))