import React from 'react'
import {Container,Row,Col,Image,Jumbotron} from 'react-bootstrap'
import interior from '../images/interiorres.jpeg'


export default class About extends React.Component{
    render(){
        return(
            <div className="">
                <Jumbotron>
                <Container>
                    <Row>
                        <Col  md={6}>
                            <Image src={interior} rounded className='about-img'fluid/>

                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <p className='title-food'> Bienvenidos!</p>
                            <p>                         
                               At Juarez Mexican Restaurant, we have an original and 
                               delicious taste to our Tex-Mex food. We offer the best
                                margaritas in the area. We offer 10 different types of 
                                margaritas to choose from! We are focused on providing 
                                excellent services with the highest levels of customer 
                                satisfaction. We will do everything we can to meet your 
                                expectations! We are a family owned-business established 
                                in 1996. With a variety of offerings to choose from, we 
                                are sure you will be happy dining with us. Take a look around
                                 our website. If you have any comments or questions, please feel
                                  free to contact us! We hope to see you soon!  We are also WiFi friendly!
                            </p>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>
        )
    }
}