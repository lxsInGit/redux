//纯函数
//功能是：修改 store中的state的值

/*
* state = 5 :旧的状态值
* action 传过来的动作
* */
export default (state = 5,action)=>{
    switch (action.type){
        case 'INCREMENT':// 增加
            return state + 1;
        case 'DECREMENT'://减少
            return state - 1;
        default :
            return  state;
    }
}