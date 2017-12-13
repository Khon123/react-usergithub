import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './components/users/UserList';
import registerServiceWorker from './registerServiceWorker';
import {Switch, BrowserRouter, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import App from "./components/App";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/users' component={UserList}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
