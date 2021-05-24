import React, { Component } from 'react';
import Login from './Login';
import Welcome from './Welcome';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './Error';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LogoutComponent from './LogoutComponent'
import Header from './Header.jsx'
import Footer from './Footer'
import Todos from './Todos'

class TodoApp extends Component {
    render() { 
        return ( 
            <div>
                
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>    
                        <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                        <AuthenticatedRoute path="/todos" exact component={Todos}/>
                        <Route path='/logout' exact component={LogoutComponent}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
         );
    }
}
 
export default TodoApp;