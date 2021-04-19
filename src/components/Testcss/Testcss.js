import React, { useState } from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import MyCarousel from "./Carousel";
import ModalUI from "./ModalUI";
import {Button} from 'react-bootstrap'


function Testcss() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    
    return (
        <>
            <Navigation />
            <div className='container'>
                <Button variant="primary" onClick={ () => handleShowModal()}>
                    Launch demo modal
                </Button>
                <br />
                <Jumbotron />
                <MyCarousel />
                <ModalUI showModal={showModal} onClose={handleClose}/>
            </div>

        </>  

        )      
}

export default Testcss;