import React, { Component } from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../homePage";
import {Form, Button} from 'react-bootstrap';



async function loginUser(credentials) {
    return fetch('http://localhost:8000/app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            islogedin: false,
            wrongPass: false,
            role: ''
        }
    }

    changeEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    changePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const registered = {
            email: this.state.email,
            password: this.state.password
        }
        console.log("registered", registered)
        const token = await loginUser(registered);

        if(token.msg==='Password matched!'){
            this.setState({
                islogedin: true,
                
            })

            window.localStorage.setItem("lms.islogedin", "true")
            window.localStorage.setItem("lms.userrole", token.role)
        }else {
            console.log("NOT LOGED IN")
            this.setState({
                wrongPass: true
            })
        }

    }

    render() {
        if(window.localStorage.getItem('lms.islogedin')==='true' || this.state.islogedin ===true){
           return <HomePage email={this.state.email} pass={this.state.password} loginstatus={this.state.islogedin}/>
        }else {
            return (
                <div className='loginWrapper'>
                    <div className='loginModal'>
                        <div >
                            <img className="loginIcon" src="login.png" alt="login icon"/>
                        </div>
                        <div className="login">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    onChange={this.changeEmail}
                                />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={this.changePassword}
                                />
                                </Form.Group>
                                <Button block size="lg" type="submit">
                                Login
                                </Button>
                            </Form>
                        </div> 
                    </div> 
                </div>     


                )      
            }

    }
/*
    render() {
        if(window.localStorage.getItem('lms.islogedin')==='true' || this.state.islogedin ===true){
           return <HomePage email={this.state.email} pass={this.state.password} loginstatus={this.state.islogedin}/>
        }else {
            return (
                <div className="container-fluid container ">
                    
                <form onSubmit={this.handleSubmit}>  
                    {this.state.wrongPass===true ? <h6>Sorry! Password did not matched. try again! </h6> : null }
                    
                    <h3>Log In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={this.changeEmail}
                        />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={this.changePassword}
                        />
                    </div>
    
    
                    <button type="submit" 
                        className="btn btn-primary btn-block">Submit</button>
                </form>
                </div>
            );
        }
    
    }
*/
}