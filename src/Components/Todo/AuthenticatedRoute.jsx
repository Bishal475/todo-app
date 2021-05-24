import React from "react";
import {Route,Redirect} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'

export default function AuthenticatedRoute(props){
        if(AuthenticationService.hasLoggedin()){
            return <Route {...props} />
        }else{
            return <Redirect to='/login' />
        }
}