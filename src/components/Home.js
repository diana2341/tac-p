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
                <h3 className='menu-title'>SIEMPRES FRESH</h3>
                <p className='menu-title'>Tasty food, inside a charming Mexican restaurant.</p>
            </Carousel.Caption>
            </Carousel.Item>
                )}
        </Carousel>
        <MenuOptions routerProps={this.props.routerProps}/>
        <br/><br/>
        <div className='about-p'>
        <p className='title-food'>Hours & Location</p>
       <p>1600 example,
        city, state zip</p> 
        <p>123-456-7788</p>

        <p>Tuesday - Thursday 3pm-9pm</p>

        <p>Friday 11:30am-10pm</p>

        <p>Saturday 11am-10pm</p>

        <p>Sunday 11am-8pm</p>



        <p>Closed Mondays</p>
        </div>
    </div>
        )
    }                

}
export default Home