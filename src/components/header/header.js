import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin : true,
            showList : false
        }
    }
    
    render() {
        return (
        <div className='navbar-top'>
            <Navbar expand="sm" variant="light">
                <Navbar.Brand href="/">UMS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>)
        
    }
}