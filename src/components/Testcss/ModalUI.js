import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal} from 'react-bootstrap'


function ModalUI(Props){

    return (
        <>
          <Modal show={Props.showModal} onHide={Props.onClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={Props.onClose}>
                Close
              </Button>
              <Button variant="primary" onClick={Props.onClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    export default ModalUI;