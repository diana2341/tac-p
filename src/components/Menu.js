import React from 'react'
import skull from '../images/skull.png'
import {Figure,Jumbotron,Col,Image,Container,Row,Dropdown} from 'react-bootstrap'
import * as data from '../components/food'



export default class Menu extends React.Component{
    render(){
        let options=['breakfast1','breakfast2','breakfast3','breakfast4','breakfast5']
        let lunchOptions=['lunch1','lunch2','lunch3','lunch4','lunch5']
        let dinnerOptions=['dinner1','dinner2','dinner3','dinner4','dinner5']
        let type=this.props.routerProps.match.url.replace(/[^\w\s]/gi, '')
        let foodType= type ==='breakfast'? options : type ==='lunch'? lunchOptions : type === 'dinner'? dinnerOptions:null

        return(
        <div className='men'>
            {console.log(type)}
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
                {foodType.map(option=>
                <div>
                <Row>
                    <Col md={4}> 
                        <Figure>
                            <Figure.Image
                            width={200}
                            height={210} 
                            src={data.renderImage(option,type)}
                            className='option-img'
                            />
                        </Figure>
                        </Col>  
                    <Col lg md={{ span: 3, offset: 1 }}>
                        <p className='about-p food-p'>{data.returnDescription(option,type)['description']}</p>
                    </Col>
                    <Col sm md={{ span: 1, offset: 1 }}>
                        <p className='about-p food-p'>{`$${data.returnDescription(option,type)['price']}.00`}</p>
                    </Col>
                    <Dropdown.Divider/>
                </Row>
                <Row><hr className='div'/></Row>
                </div>
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

