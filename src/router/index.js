import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeadTitle from '../common/headtitle'
//导入需要路由守卫的配置文件
//导入页面
import Main from '../pages/main';
import Good from '../pages/goods';
import Global from '../pages/global';
import Mask from '../pages/mask';


const App = () => (
    <BrowserRouter>
        <div>
            {/* 1.配置跳转路径 */}
            <HeadTitle />
            {/* 2.配置路由表 */}
            <div>
                <Switch>
                    <Route path={"/"} exact={true} component={Main} />
                    <Route path={'/goods'} exact={true} component={Good}></Route>
                    <Route path={'/mask'} exact={true} component={Mask}></Route>
                    <Route path={'/global'} exact={true} component={Global}></Route>
                </Switch>
            </div>
        </div>

    </BrowserRouter>
)

export default App;