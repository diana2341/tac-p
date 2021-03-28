import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {CardGroup} from 'react-bootstrap';


import breakfast from '../images/breakfast.jpeg'
import lunch from '../images/enchiladas.jpeg'
import dinner from '../images/din.jpeg'

export default class MenuOptions extends React.Component{
    render(){
        let options=['breakfast','lunch','dinner']
        let renderImage=(option)=>{
            if (option === 'breakfast')return breakfast
            else if (option === 'lunch')return lunch
            else if(option==='dinner')return dinner
            else return null
        }
        return( 
            <div> 
            <br/>   
            <h1 className='menu-title'>Menu</h1><br/><br/><br/>       
            <CardGroup>
                {options.map(option=>
            <Card className='card' onClick={()=>this.props.routerProps.history.push(`/${option}`)}> 
                <Card.Img className='options' variant="top" src={renderImage(option)}/>
                <Card.ImgOverlay className='body'><br/>
                    <Card.Text className='type'>{option.toUpperCase()}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            )}
            </CardGroup>

          </div>
        )
    }
}