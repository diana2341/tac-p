import React from 'react'
import { Jumbotron,Container } from 'react-bootstrap'

export default class ContactUs extends React.Component{
    render(){
        return(
            <div className='about-p contact'>
                <Jumbotron>
                    <Container><br/><br/>
                    <p className='title-food'>Contact Us</p>
                    <p>Interested in joining our team? </p>
                    <p>Click <a href=''>here</a> for more information about open positions</p>


                    <p>This is a great place to host your holiday parties, business lunches,  dinners / baby showers and much more! If you'd like to visit Us to discuss options For reservations, contact our office. </p>

                    <p>Want to send comments or suggestion, please email us :
                    FOR RESERVATIONS: please call:123-456-8899
                    </p>
                    <p>

                    For any media inquiries, please contact:
                    This is an example site,
                    Taco@haven.com
                    </p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}