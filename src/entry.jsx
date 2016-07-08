/**
 * Created by shen on 16/4/29.
 */
require('./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
import createHashHistory from 'history/lib/createHashHistory'
import { Router, Route, IndexRoute,useRouterHistory} from 'react-router'
import Demo from 'page/ReactDemo/Demo.js'
import TextOverDemo from 'components/TextOver/Demo.js'
import Verify from 'page/verify/Demo.js'

ReactDOM.render(
    <Router history={useRouterHistory(createHashHistory)({
            queryKey: true
            })}>

        <Route path='demo' component={Demo}/>
        <Route path='/' component={Verify}/>

    </Router>, document.getElementById('root')
);


