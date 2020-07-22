import React from 'react';
import ReactDOM from 'react-dom';

//引入页面
import Main from './components/main';

//引入纯函数
import reducer from './reducer';

//引入redux
//createStore 创建仓库的，仓库对状态统一管理的
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';

//创建仓库
//参数：reducer 是纯函数
const store = createStore(reducer);



//store.getState() 获取状态值
//onIncrement 传给 Main组件的函数

//store.dispatch 发送动作，  发送的动作可以被纯函数接收
let render = () => ReactDOM.render(<Main value={store.getState()} 
onIncrement={() => store.dispatch({ type: 'INCREMENT' }) } 
onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }/>,
    document.getElementById('root'));
render();

//监听store的变化，重新渲染页面
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
