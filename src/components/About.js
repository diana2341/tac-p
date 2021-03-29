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
                            <p className='about-p'>                         
                               At Taco Haven Mexican Restaurant, we have an original and 
                               delicious taste to our Tex-Mex food. This is an example restaurant site 
                               used to show my front-end design skills. This web application was made using Reactjs, rails api and boostrap with CSS! 
                               To see more of my work you can visit <a href='https://dianaponce.netlify.app/'>my portfolio site here </a>
                                This site will show example foods available in a mexican restaurant, the rest of the text is lorem ipsum...
                                Nam aliquet, neque non sagittis euismod, ex arcu convallis velit, sed auctor lacus erat vitae nisi. Aenean leo dui, 
                                finibus eu rutrum eget, tempor eu nulla. Morbi tempor maximus lorem, vitae efficitur lorem malesuada gravida. Vivamus 
                                lacinia in nisl ac fringilla. Mauris id tristique ante. Mauris pharetra augue vitae nibh placerat feugiat. Mauris nulla augue,
                                 aliquam non interdum ac, pharetra at nunc. Vestibulum orci turpis, mattis eu nibh sed, pretium auctor arcu.
                            </p>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>
        )
    }
}