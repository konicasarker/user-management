import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './style.css'

export default class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            phone: '',
            email: '',
            password: '',
            address: '',
            role: '',
            id: '',
            editDone: false,
            createDone: false,
        }
    }

    changeUserName = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    changePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
  
    changeEmail = (event) =>{
        console.log("EMAIL: => ", event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    changeAddress = (event) =>{
        console.log("Address: => ", event.target.value)
        this.setState({
            address: event.target.value
        })
    }

    changePassword = (event) =>{
        console.log("PASSWORD: => ", event.target.value)
        this.setState({
            password: event.target.value
        })
    }

    
    handleSubmit = (event) =>{
        event.preventDefault();

        const registered = {
            username: this.state.username,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            role: 'user',
            id: this.state.id
        }

        if(this.props.action === 'edit'){
            axios.post('http://localhost:8000/app/edituser', registered)
            .then((response) => {
                    console.log(response.status)
                    if(response.status===200) 
                    {
                        this.setState({
                            editDone: true
                        })
                    }
                })
        }else{
            axios.post('http://localhost:8000/app/signup', registered)
            .then(response => {
                    console.log(response.status)
                    if(response.status===200) 
                    {
                        this.setState({
                            createDone: true
                        })
                    }
                })
         }

        
        this.setState({
            username: '',
            email: '',
            password: '',
            address: '',
            phone:'',
            role:''
        })

            
       // }

    }

    componentDidMount(){
        let obj = ''
        if(this.props.userdata){
            obj = JSON.parse(this.props.userdata);
        }

        this.setState({
            username: obj.username?obj.username:'',
            phone: obj.phone?obj.phone:'',
            email: obj.email?obj.email:'',
            password: '',
            address: obj.address?obj.address:'',
            id: obj._id?obj._id:''
        })
        
    }

    render() {
        let title, redirectPage;
        if(this.props.action==='edit'){
            title = "Edit user account";
            redirectPage = "/admin"
        }else {
            title = "Create new accoutnt";
            redirectPage = "/login"
        }

        if ((this.state.editDone === true) || (this.state.createDone === true)){
            
            return <Redirect to={redirectPage} />
        } 
        return(
                <div className="signup-wrapper">
                     <div className="signup-modal">
                     <div className="signup-header"> 
                         <div >
                            <img className="signupIcon" src="signup.png" alt="signup"/>
                        </div>
                  
                        <div className="signuptitle"> {title} </div>
                     </div>
                     <div className="signup-input">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group size="lg" controlId="name">
                            <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="name"
                                    onChange={this.changeUserName}
                                    value={this.state.username}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control
                                    type="email"
                                    onChange={this.changeEmail}
                                    value={this.state.email}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="phone">
                            <Form.Label>Phone/Mobile</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="phone"
                                    onChange={this.changePhone}
                                    value={this.state.phone}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={this.changePassword}
                                    value={this.state.password}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="address"
                                    onChange={this.changeAddress}
                                    value={this.state.address}
                                />
                            </Form.Group>

                            <Button block size="lg" type="submit">
                            Save
                            </Button>
                        </Form>
                        
                     </div>
                    </div>
                </div>
            )

    }
}

