import { React , Component} from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron, Button} from 'react-bootstrap';


export default class jumbotron extends Component {

    render() {

            return (
                <Jumbotron className='myjumbotron'>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                )      
            }

    }