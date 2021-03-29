import React from 'react'
import skull from '../images/skull.png'
import {Figure,Jumbotron,Col,Image,Container,Row} from 'react-bootstrap'
import Side from '../components/SideImages'
import shrimp from'../taco-imgs/shrimp.jpeg'
import breakfast1 from'../taco-imgs/breakfast1.jpeg'
import breakfast2 from'../taco-imgs/breakfast2.jpeg'
import breakfast3 from'../taco-imgs/breakfast3.jpeg'
import breakfast4 from'../taco-imgs/breakfast4.jpeg'
import breakfast5 from'../taco-imgs/breakfast5.jpeg'

export default class BreakfastMenu extends React.Component{
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
            <div className='title-food'>Breakfast</div><br/>

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
                            />
                        </Figure>
                        </Col>  
                    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                </Row> 
                )}
                
            </Container>   
            </div>

        </div>
        )
    }
}