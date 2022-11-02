import React from 'react'

import Hemonimg from '../../Components/Hemonimg/Hemonimg'
import bgimage from "../../Assets/contact.jpeg"
import Contactform from './Contactform/Contactform'

const contact = () => {
  return (
    <div>
      <Hemonimg
        bgimage={bgimage}
        heading={["We're ", <span>here</span>]}
        text="Let's talk, our door is always open for a good cup of coffee"
      />
      <Contactform/>
    </div>
  )
}

export default contact