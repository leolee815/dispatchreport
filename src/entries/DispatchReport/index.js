import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../routes/DispatchReport/index';
import store from '../../redux/DispatchReport/stores/store';



ReactDOM.render(
    // The top-level Provider is what allows us to `connect` components to the store
    // using ReactRedux.connect
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
