import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Image, Container, Jumbotron, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import './style.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
            <div className="text-center"> 
            {/* <Navbar expand="sm" bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar> */}
            </div>
            <div className="landingPageContainer"> 
                <div className="landingPageBg"> 
                    <div className="landing-image-container">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                            <Image src="images/main1.jpeg" rounded />
                            </Col>
                        </Row>
                        </Container>
                    </div>  

                    <div className="landing-text-container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <ul className="navbar-nav ml-auto">                   
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav> 

                        <Jumbotron className="jumbotrol-css">
                            <h1>Welcome To User Management System!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                                <br/>
                                <br/>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </div> 
                </div>
                {/* <div className="footer">dskjfhklshdfklsjhfkjsdhflk </div>
                <div className="footer">dskjfhklshdfklsjhfkjsdhflk </div>
                <div className="footer">dskjfhklshdfklsjhfkjsdhflk </div>
                <div className="footer">dskjfhklshdfklsjhfkjsdhflk </div> */}
            </div>
            </div>
        )
    }
}