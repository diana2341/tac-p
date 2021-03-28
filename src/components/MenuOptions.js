import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {CardGroup} from 'react-bootstrap';


import breakfast from '../images/breakfast.jpeg'
import lunch from '../images/enchiladas.jpeg'
import din from '../images/din.jpeg'

export default class MenuOptions extends React.Component{
    render(){
        return( 
            <> 
            <br/>   
            <h1>Menu</h1><br/><br/><br/>       
            <CardGroup>
            <Card> 
                <Card.Img className='options' variant="top" src={breakfast}/>
                <Card.ImgOverlay className='body'><br/>
                    <Card.Text className='type'>Breakfast</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card> 
                <Card.Img className='options' variant="top" src={lunch}/>
                <Card.ImgOverlay className='body'><br/>
                    <Card.Text className='type'>Lunch</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card> 
                <Card.Img className='options' variant="top" src={din}/>
                <Card.ImgOverlay className='body'><br/>
                    <Card.Text className='type'> Dinner</Card.Text>
                </Card.ImgOverlay>
            </Card>
          </CardGroup>
          </>
        )
    }
}