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



let renderImage=(option,type)=>{
    console.log(option,type)
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
export default renderImage