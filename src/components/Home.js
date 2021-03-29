import React, { Component } from 'react'
import MenuOptions from '../components/MenuOptions'
import {Carousel} from 'react-bootstrap'
import tac1 from '../images/tac4.jpeg';
import tac2 from '../images/tac5.jpg';
import bur1 from '../images/bur1.jpeg';



class Home extends Component{

    

    
    render(){
        let options=['tac1','tac2','bur1']
        let renderImage=(option)=>{
            if (option === 'tac1')return tac1
            else if (option === 'tac2')return tac2
            else if(option==='bur1')return bur1
            else return null
        }
        return(
    <div>
            
        <Carousel fade interval={3000}>
            {options.map(option=>
                  <Carousel.Item>
                <img
                className="d-block w-100"
                src={renderImage(option)}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
                )}
        </Carousel>
        <MenuOptions routerProps={this.props.routerProps}/>
    </div>
        )
    }                

}
export default Home