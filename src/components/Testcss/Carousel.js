import React, { Component }  from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from 'react-bootstrap'


export default class MyCarousel extends Component {

    render() {

            return (
                <div className='carouselContainer'>
                      <br />
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://berchain.com/wp-content/uploads/2021/02/christian-lue-mjYCTlJCY7E-unsplash-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static.euronews.com/articles/stories/05/07/48/12/1000x563_cmsv2_1f4a0062-5bb7-5715-8006-2a25bd5528bd-5074812.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/3e/ed/2f/3eed2f3f46270a2111280e7761bd380a.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>
                )      
            }

    }