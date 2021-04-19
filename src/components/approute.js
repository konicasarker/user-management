import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import Login from "./login/login";

type Props = {
    component: React.ComponentType<any>;
    path: String;
    isPrivate: boolean;
    exact: boolean;
}

/*
export default class AppRoute extends Component {
    constructor(){
        super()
        this.state = {
            isLogin : true
        }
    }

    isLoggedIn = () => window.localStorage.getItem('lms.islogedin')

    render() {
        const isPrivate = this.props.isPrivate
        const component = this.props.component

        return (
            <Route 
                path={this.props.path} 
                render={ (props) => ( 
                 <Component {...props} />   
                ) }
            />
        )
    }
}

*/

function AppRoute ({component : Component, path, role, isPrivate, ...rest}) {
    const isLoggedIn = () => {
        return window.localStorage.getItem('lms.islogedin')
        }  

    const isUserAllowed = () => {
        const userRole = window.localStorage.getItem('lms.userrole')
        return role.includes(userRole)
    }  
    //&& (isUserAllowed()===false)
    return (
        <>
         {console.log('-------isPrivate && !isLoggedIn() && isUserAllowed()------->>', isPrivate, !isLoggedIn(), isUserAllowed())}
   
        <Route 
            path={path}
            render={ props => (
                ((isPrivate && !isLoggedIn()) || (!isUserAllowed())) ? ( <Login />  ) :  ( <Component {...props} />  )
                )}
        />
        </>
    )
}

export default AppRoute;