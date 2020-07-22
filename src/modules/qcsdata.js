//配置屈成氏的获取数据纯函数--2.

import {FETCH_MIAO_SHA_DATA} from '../contact'

const qcsdata=(state={},action)=>{
    switch (action.type){
        case FETCH_MIAO_SHA_DATA ://获取秒杀数据
            return Object.assign({},state,{miaoshaList:action.miaoshaList});
        default:
            return state;
    }
}

export default qcsdata;