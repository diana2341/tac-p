import React from 'react'
import skull from '../images/skull.png'
import {Figure,Jumbotron,Col,Image,Container,Row} from 'react-bootstrap'
import Side from './SideImages'
import shrimp from'../taco-imgs/shrimp.jpeg'
import breakfast1 from'../taco-imgs/breakfast1.jpeg'
import breakfast2 from'../taco-imgs/breakfast2.jpeg'
import breakfast3 from'../taco-imgs/breakfast3.jpeg'
import breakfast4 from'../taco-imgs/breakfast4.jpeg'
import breakfast5 from'../taco-imgs/breakfast5.jpeg'

export default class Menu extends React.Component{
    render(){
        let options=['breakfast1','breakfast2','breakfast3','breakfast4','breakfast5']
        let renderImage=(option)=>{
            if (option === 'breakfast1')return breakfast1
            else if (option === 'breakfast2')return breakfast2
            else if(option==='breakfast3')return breakfast3
            else if(option==='breakfast4')return breakfast4
            else if(option==='breakfast5')return breakfast5

            else return null
        }
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
            <div className='title-food'>{this.props.routerProps.match.url.replace(/[^\w\s]/gi, '')}</div><br/>
            <div className='menu'>
                <Container>
                {options.map(option=>
                <Row>
                    <Col md={4}> 
                        <Figure>
                            <Figure.Image
                            width={200}
                            height={210} 
                            src={renderImage(option)}
                            className='option-img'
                            />
                        </Figure>
                        </Col>  
                    <Col md={{ span: 3, offset: 1 }}>
                        {`example ingredients and taste for the sustomers till back end is done`}
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        {`$13:00`}
                    </Col>
                </Row> 
                )}
                
            </Container>   
            </div>

        </div>
        )
    }
}


// Breakfast Specials
// A Mexican breakfast is the perfect start to any day and La Tapatia is here to accommodate with a great selection of Mexican breakfast favorites. We offer a large selection of traditional breakfast items as well as our one-of-a-kind Fajitas for Two. Stay tuned for more breakfast specials. To learn more about our breakfast items, stop into our restaurant or contact us by phone or email.

// Lunch Specials
// Despite all the attention paid to brunch, lunch is truly the unsung hero of midday meals. It provides us sustenance to make it through a boring work day, provides an opportunity to drink before dark, and most importantly, it's much cheaper than dinner. When the lunch hour strikes and you're craving authentic Mexican food, stop by and savor a special meal at a special price!

// Dinner Specials
// Come in, relax, and enjoy delicious lunch and dinner specials that are prepared by expert chefs and set at affordable prices. Rough day at the office? Treat yourself to our daily dinner specials. After the work day is over, come on by and enjoy some of the best Mexican food Houston has to offer.

