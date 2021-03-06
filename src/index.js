import React from 'react';
import ReactDOM from 'react-dom';

//引入插件
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

//引入仓库
import store,{history} from './store'

import './index.css';
import App from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
             <App />
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();