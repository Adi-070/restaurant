import React from 'react'
import Hemonimg from '../../Components/Hemonimg/Hemonimg'
import bgimage from "../../Assets/menubg1.jpeg"
import Menuday from './Menuday/Menuday'

const menu = () => {
  return (
    <div>
      <Hemonimg
      bgimage={bgimage}
      heading={["Our",<span>Menu</span>]}
      text="Everything we have to offer at one place" 
      />
      <Menuday />
    </div>
  )
}

export default menu