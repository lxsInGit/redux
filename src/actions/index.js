//1.获取数据
import axios from 'axios';
import {FETCH_MIAO_SHA_DATA} from '../contact'

export function fetchMiaoshaData(){
    return (dispatch)=>{
        return axios.get('activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=a62ee360-bb2b-11ea-b493-15a8461d92f9').then(res=>{
           console.log(res)
            dispatch({
                type:FETCH_MIAO_SHA_DATA,
                miaoshaList:res.data.data.specials_item_v_o_s
            })
        })
    }
}