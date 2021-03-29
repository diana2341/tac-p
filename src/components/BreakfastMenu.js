import React from 'react'
import skull from '../images/skull.png'
import {Figure,Jumbotron,Col,Image,Container,Row} from 'react-bootstrap'
import Side from '../components/SideImages'
import shrimp from'../taco-imgs/shrimp.jpeg'
export default class BreakfastMenu extends React.Component{
    render(){
        return(
        <div className='men'>
            <Figure>
                <Figure.Image
                width={200}
                height={210} 
                alt="171x180"
                src={skull}
                className='skull'
                />
            </Figure>
            <br/>
            <div className='title-food'>Breakfast</div><br/>

            <div className='menu'>
                <Container>
                <Row>
                    <Col md={4}> 
                        <Figure>
                            <Figure.Image
                            width={200}
                            height={210} 
                            src={shrimp}
                            />
                        </Figure>
                    </Col>  
                    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                </Row>   
            </Container>   
            </div>

        </div>
        )
    }
}