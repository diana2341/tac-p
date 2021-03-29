import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
// import '../index.css'
export default class Footer extends React.Component {
    render(){
        return(
            <footer className='footer'>
                <Container>
                <Row md={10}>
                    <Col>
                    <p><a className='link' href='/home/about-us'> About Us</a></p>
                    <p><a className='link' href='/home/contact-us'>Contact Us</a></p>
                    </Col>
                    {/* <Col xs={6}></Col> */}
                    <Col>®Diana's Taco Haven allrights reserved 2021</Col>
                </Row>
                </Container>
             </footer>
        )
    }
}