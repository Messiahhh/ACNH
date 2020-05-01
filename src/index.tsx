import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'

import App from './app'
import reducer from './store/reducers'
import { ConfigProvider } from 'antd';

let store = createStore(reducer)


ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.querySelector('#root')
)

