import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin : true,
            showList : false
        }
    }
    isLoggedIn = () => window.localStorage.getItem('lms.islogedin')
    logout = () => {
        window.localStorage.removeItem('lms.islogedin')
        window.localStorage.removeItem('lms.userrole')
    }

    admin = () => {
        this.setState({ showList: true})
    }

    render() {
        if(this.isLoggedIn()==='true' || this.props.loginstatus===true){
            return (
                    <div> 
                        <h2 className="text-center"> Welcome to user management system - home page</h2>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <ul className="navbar-nav ml-auto">                   
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/"} onClick={() => this.logout()}>Logout</Link>
                                    </li>
                                    <li className="nav-item"> 
                                        <Link className="nav-link" to={"/admin"} onClick={() => this.admin()}>Administration</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
            )
        } else {
            return (
                <div> 
                    <div class="container">
                        <div class="row justify-content-center">
                            <h1>You are not logged in, please login first</h1>
                            <Redirect to='/login' />
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}