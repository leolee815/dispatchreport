import React from 'react';
import { Router, Route, IndexRoute, Link ,hashHistory } from 'react-router';

import PlateOrder from '../../components/DispatchReport/PlateOrder/View/View'
import OutputMonitor from '../../components/DispatchReport/OutputMonitor/View/View'
import ChanceView from '../../components/DispatchReport/ChanceCount/ChanceView/View/View'


module.exports = (
    <Router history={hashHistory}>
        <Route path="PlateOrder" component={PlateOrder}></Route>
        <Route path="OutputMonitor" component={OutputMonitor}></Route>
        <Route path="ChanceCount">
          <Route path="ChanceView" component={ChanceView}/>
        </Route>
    </Router>
);
