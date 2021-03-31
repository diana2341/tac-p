import React from 'react'
import { Jumbotron,Container ,Figure} from 'react-bootstrap'
import logo from '../images/chil.png'

export default class ContactUs extends React.Component{
    render(){
        return(
            <div className='about-p contact'>
                {/* <Jumbotron> */}
                    {/* <Container><br/><br/> */}
                    <div className='jumbo'>
                    <Figure>
                <Figure.Image
                width={210}
                height={310} 
                alt="171x180"
                src={logo}
                className='skull'
                />
                </Figure>
                    <h1 className='title-food'>Contact Us</h1>
                    <p>Interested in joining our team? </p>
                    <p>Click <a href=''>here</a> for more information about open positions</p>


                    <p>This is a great place to host your holiday parties, business lunches, dinners, baby showers and much more! If you'd like to visit Us to discuss options For reservations, contact our office. </p>

                    <p>Want to send comments or suggestion, please email us :
                    FOR RESERVATIONS: please call:123-456-8899
                    </p>
                    <p>

                    For any media inquiries, please contact:
                    This is an example site,
                    Taco@haven.com
                    </p>
                    </div>
                    
                    {/* </Container> */}
                    
                {/* </Jumbotron> */}
            </div>
        )
    }
}