import React, { Component } from 'react'
import MenuOptions from '../components/MenuOptions'
import {Carousel} from 'react-bootstrap'
import tac1 from '../images/tac4.jpeg';
import tac2 from '../images/tac5.jpg';
import bur1 from '../images/bur1.jpeg';



class Home extends Component{

    

    
    render(){
        return(
    <div>
            
        <Carousel fade interval={3000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tac1}
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
                src={tac2}
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
                src={bur1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <MenuOptions routerProps={this.props.routerProps}/>
    </div>
        )
    }                

}
export default Home