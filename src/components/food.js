import { render } from '@testing-library/react'
import breakfast1 from'../taco-imgs/breakfast1.jpeg'
import breakfast2 from'../taco-imgs/breakfast2.jpeg'
import breakfast3 from'../taco-imgs/breakfast3.jpeg'
import breakfast4 from'../taco-imgs/breakfast4.jpeg'
import breakfast5 from'../taco-imgs/breakfast5.jpeg'

import lunch1 from'../taco-imgs/lunch1.jpeg'
import lunch2 from'../taco-imgs/lunch2.jpeg'
import lunch3 from'../taco-imgs/lunch3.jpeg'
import lunch4 from'../taco-imgs/lunch4.jpeg'
import lunch5 from'../taco-imgs/lunch5.jpeg'

import dinner1 from'../taco-imgs/dinner1.jpeg'
import dinner2 from'../taco-imgs/dinner2.jpeg'
import dinner3 from'../taco-imgs/dinner3.jpg'
import dinner4 from'../taco-imgs/dinner4.jpeg'
import dinner5 from'../taco-imgs/dinner5.jpeg'

let foodDescription={
    breakfastOne:{price:15.00,description:'Eggs, cruchy tortillas with avacado,cheese, and cilantro!'},
    breakfastTwo:{price:5.00,description:'Three tortas topped with Eggs( any way) frijoles with any free drink.'},
    breakfastThree:{price:17.00,description:'Bacon egg and cheese wrapped in a fried tortilla, with a side of rice and beans.'}  ,
    breakfastFour:{price:14.00,description:'Breakfast quesadilla, with sausage egg and cheese con salsa roja.'},
    breakfastFive:{price:5.00,description:'Healthy egg and avacado con pan tostado.'},

    lunchOne:{price:10.00,description:'carne asada tacos with pico de gallo and a side of avacado.'},
    lunchTwo:{price:10.00,description:'Shrimp tacos served with ranch avacado and mixed salad.'},
    lunchThree:{price:12.00,description:'carnita tacos con avacado and cilintro served with our famous sauce.'},
    lunchFour:{price:15.00,description:'for the vegans we got cauliflower bite tacos, made cruchy and spicy.'},
    lunchFive:{price:8.50,description:'chicken and bacon wrap, with corn cheese lettuce and red sauce.'}

    ,
    DinnerOne:{price:16.00,description:'Huge Fajita plate, large tortilla, chicken peppers rice and beans.'},
    DinnerTwo:{price:25.00,description:'Meat lovers dish, we have steak,grilled chicken and shrimp served with a salad and rice/beans.'},
    DinnerThree:{price:15.00,description:'Loaded nachos, with grape tomatoes lime cheese, garnished with spicy sauce and cilantro with an option with ground beef.'},
    DinnerFour:{price:13.00,description:'Famouse mexican tamales, served with a salad, rice and beans.'},
    DinnerFive:{price:14.00,description:'Baked chicken with spanish yellow rice and potatoes as a side.'}


}
export let returnDescription=(option,type)=>{
    if (option === 'breakfast1'&& type==='breakfast')return foodDescription['breakfastOne']
    else if (option === 'breakfast2'&& type==='breakfast')return foodDescription['breakfastTwo']
    else if(option==='breakfast3'&& type==='breakfast')return foodDescription['breakfastThree']
    else if(option==='breakfast4'&& type==='breakfast')return foodDescription['breakfastFour']
    else if(option==='breakfast5'&& type==='breakfast')return foodDescription['breakfastFive']

    else if(option==='lunch1'&& type==='lunch')return foodDescription['lunchOne']
    else if(option==='lunch2'&& type==='lunch')return foodDescription['lunchTwo']
    else if(option==='lunch3'&& type==='lunch')return foodDescription['lunchThree']
    else if(option==='lunch4'&& type==='lunch')return foodDescription['lunchFour']
    else if(option==='lunch5'&& type==='lunch')return foodDescription['lunchFive']

    else if(option==='dinner1'&& type==='dinner')return foodDescription['DinnerOne']
    else if(option==='dinner2'&& type==='dinner')return foodDescription['DinnerTwo']
    else if(option==='dinner3'&& type==='dinner')return foodDescription['DinnerThree']
    else if(option==='dinner4'&& type==='dinner')return foodDescription['DinnerFour']
    else if(option==='dinner5'&& type==='dinner')return foodDescription['DinnerFive']


    else return null
}
export let renderImage=(option,type)=>{
    if (option === 'breakfast1'&& type==='breakfast')return breakfast1
    else if (option === 'breakfast2'&& type==='breakfast')return breakfast2
    else if(option==='breakfast3'&& type==='breakfast')return breakfast3
    else if(option==='breakfast4'&& type==='breakfast')return breakfast4
    else if(option==='breakfast5'&& type==='breakfast')return breakfast5

    else if(option==='lunch1'&& type==='lunch')return lunch1
    else if(option==='lunch2'&& type==='lunch')return lunch2
    else if(option==='lunch3'&& type==='lunch')return lunch3
    else if(option==='lunch4'&& type==='lunch')return lunch4
    else if(option==='lunch5'&& type==='lunch')return lunch5

    else if(option==='dinner1'&& type==='dinner')return dinner1
    else if(option==='dinner2'&& type==='dinner')return dinner2
    else if(option==='dinner3'&& type==='dinner')return dinner3
    else if(option==='dinner4'&& type==='dinner')return dinner4
    else if(option==='dinner5'&& type==='dinner')return dinner5


    else return null
}
