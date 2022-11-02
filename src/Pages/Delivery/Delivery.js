import React from 'react'

import Hemonimg from '../../Components/Hemonimg/Hemonimg'
import bgimage from "../../Assets/delivery.png"

import Deliveryinfo from './Deliveryinfo/Deliveryinfo'

const delivery = () => {
  return (
    <div>
       <Hemonimg
      bgimage={bgimage}
      heading={["Now ",<span>comfortably eat at your home</span>]}
      text="Delivery available Monday-Friday from 11AM - 10PM"
      />
      <Deliveryinfo />
    </div>
  )
}

export default delivery