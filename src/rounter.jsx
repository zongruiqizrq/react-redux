// import React from 'react'
// import { Router, Route, browserHistory } from 'react-router'

// // 配置路由
// import Counter from './compontents/Counter'

// export default (({history}) => {
//     return (
//         <Router history={history}>
//             <div>
//                 <Route path="/" exact component={Counter} />
//             </div>
//         </Router>
//     )
// })
import React from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import {createStore} from "redux";
import {Provider} from "react-redux"
import loadableFun from 'react-loadable'
import {createHashHistory} from 'history';
import reducer from "./reducers"

const store = createStore(reducer)
const hashHistory = createHashHistory();

const Counter = loadableFun({
  loader: () => import('./compontents/Counter'),
  loading: () => null,
})
const Todolist = loadableFun({
  loader: () => import('./compontents/Todolist'),
  loading: () => null,
})

const PageLayoutPrimary = loadableFun({
  loader: () => import('./compontents/PageLayoutPrimary'),
  loading: () => null,
})

export default class RouterBox extends React.Component {
  render() {
    return (
      <Provider
        store={store}       
        history={hashHistory}
      >
        <div
          style={{
            height: '100vh',
            width: '100vw',
            overflow: 'hidden auto',
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>redux</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
            />
            <meta name="keywords" content="redux" />
            <meta name="description" content="redux" />
            <meta name="full-screen" content="yes" />
            <meta name="x5-fullscreen" content="true" />
            <link
              rel="Shortcut Icon"
              href="http://oscacgbbh.bkt.clouddn.com/ico_16X16.ico"
            />
            <link
              rel="Bookmark"
              href="http://oscacgbbh.bkt.clouddn.com/ico_16X16.ico"
            />
          </Helmet>
          <PageLayoutPrimary>
            <Switch>
              <Route
                path="/counter"
                component={Counter}
              />

              {/* 首页 */}
              <Route
                path="/todolist"
                component={Todolist}
              />

              {/* 默认主页 */}
              <Route component={Counter} />
            </Switch>
          </PageLayoutPrimary>
        </div>
      </Provider>
    )
  }
}