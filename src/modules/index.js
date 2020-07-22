// 合并状态树
import {combineReducers} from 'redux'

//引入路由状态树
import {routerReducer} from 'react-router-redux'

//引入数据状态树
import qcsdata from './qcsdata'

export default combineReducers({
    routerReducer,
    qcsdata
})
