import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

import './Deliveryinfo.css'

const Deliveryinfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
              <div>
                   <div className='delivery-iconbox'>
                     <BsFillStarFill color='blue'/>
                     <h3 className='heading-tertiary'>
                        Order with chef's food app
                     </h3><br/>
                   </div>
                 <p>1. You place a food order on your website or Facebook page.<br/><br/><br/><br/>
2. The order is instantly pushed to your smartphone or tablet where you can review it via the free order taking app we provide.<br/><br/><br/><br/>
3. You decide the pickup time/delivery time and your answer is pushed right away, which makes the entire process short and effective.</p>
              </div>
              <div>
                   <div className='delivery-iconbox'>
                     <BsFillStarFill color='blue'/>
                     <h3 className='heading-tertiary'>
                        Additional information
                     </h3><br/>
                   </div>
                 <p>A button.<br/><br/><br/>
Yes, really, a button. To set up our online food ordering system in place, all you need to do is add the “See MENU & Order now” button to your website and Facebook page. When clicked, this will open up your restaurant menu so that your customer can choose mouth-watering dishes.
<br/><br/><br/>
You'll also be able to add the "Table Reservations" button on your website so customers can easily book a table or order food in advance for when they get there.</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Deliveryinfo