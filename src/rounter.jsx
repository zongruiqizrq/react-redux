import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// 配置路由
import Counter from './compontents/Counter'

export default (({history}) => {
    return (
        <Router history={history}>
            <div>
                <Route path="/" exact component={Counter} />
            </div>
        </Router>
    )
})