import React from 'react'
import './Menuday.css'

import image1 from "../../../Assets/burger.jpg"
import image2 from "../../../Assets/brownie.jpeg"
import image3 from "../../../Assets/Fried Mushrooms.jpeg"
import image4 from "../../../Assets/Frankfurter sausages.jpeg"
import image5 from "../../../Assets/Grilled Salmon.jpeg"
import image6 from "../../../Assets/Chicken with leek&sauce.jpeg"
import image7 from "../../../Assets/Cheesecake.jpeg"
import image8 from "../../../Assets/meat.jpeg"
import image9 from "../../../Assets/seafood.jpeg"
import image10 from "../../../Assets/gourmetfish.jpeg"
import image11 from "../../../Assets/baked vegetables.jpeg"
import image12 from "../../../Assets/flatpasta.jpeg"
import image13 from "../../../Assets/shrimp.jpeg"
import image14 from "../../../Assets/redpasta.jpeg"



const Menuday = () => {
  return (
    <div className='section'>
        <div className='container menu-of-the-day'>
            <h1 className='heading-second'>
                Desserts for the day
            </h1> < br/>
            <div className='og'>
              <img src={image7} width="300px" height="200px"  alt='Burger'/> <br/><br/>
              <p>Cheesecake</p> <br/>
              <p>$ 9.45</p>
            </div>
        
           <div className='of'>
              <img src={image2} width="300px" height="200px"  alt='brownie'/> <br/>
             <br/> <p>Chocolate fudge Brownies</p> <br/>
              <p>$ 7.35</p>
            </div>
           </div>

           <h1 className='heading-second'>
                Main course
            </h1> <br/>
            <div className='og'>
             <br/> <img src={image3} height="200px" width="300px"alt='Burger'/> <br/><br/>
              <p>Fried Mushrooms</p> <br/>
              <p>$ 16</p>
            </div>
            <div className='og'>
              <img src={image4} width="300px"height="180px" alt='Burger'/> <br/><br/>
              <p>Frankfurter sausages</p> <br/>
              <p>$ 17.8</p><br/>
            </div>
            <div className='og'>
              <img src={image5} width="300px"height="200px" alt='Burger'/> <br/><br/>
              <p>Grilled Salmon</p> <br/>
              <p>$ 25</p><br/>
            </div> 
            <div className='og'>
              <img src={image6} width="300px" height="200px"alt='Burger'/> <br/><br/>
              <p>Chicken with leek and sauce</p> <br/>
              <p>$ 23.4</p><br/>
            </div>
            <div className='og'>
              <img src={image1} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Chicken zinger burger</p> <br/><br/>
              <p>$ 11</p><br/>
            </div>
            <div className='og'>
              <img src={image8} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Cooked meat on ceramic plate </p> <br/>
              <p>$ 12.9</p><br/>
            </div>
            <div className='og'>
              <img src={image9} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Seafood with drum sticks</p> <br/>
              <p>$ 15</p><br/>
            </div>
            <div className='og'>
              <img src={image10} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Gourmet fish</p> <br/>
              <p>$ 19</p><br/>
            </div>
            <div className='og'>
              <img src={image11} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Baked vegetables</p> <br/>
              <p>$ 21</p><br/>
            </div>
            <div className='og'>
              <img src={image12} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Flat pasta</p> <br/>
              <p>$ 21</p>
            </div>
            <div className='og'>
              <img src={image13} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Shrimp with noodles</p> <br/>
              <p>$ 21</p>
            </div>
            <div className='og'>
              <img src={image14} width="300px" height="200px" alt='Burger'/> <br/><br/>
              <p>Red pasta</p> <br/>
              <p>$ 21</p>
            </div>


           
           

    </div>
  )
}

export default Menuday