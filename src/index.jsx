import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux"
import { Router, Route  } from 'react-router'
import createHashHistory from 'history/createHashHistory';

import reducer from "./reducers"

import App from './App';
import Counter from './compontents/Counter'
import Todolist from './compontents/Todolist'
const store = createStore(reducer)
const hashHistory = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" exact component={App}></Route>
            <Route path="/counter"  exact  component={Counter}/>     
            <Route path="/todolist" exact component={Todolist}/> 
    </Router>
    </Provider>
, document.getElementById('root'));



