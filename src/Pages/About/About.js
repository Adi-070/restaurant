import React from 'react'
import Hemonimg from '../../Components/Hemonimg/Hemonimg'
import bgimage from "../../Assets/About.jpg"

import Aboutinfo from './Aboutinfo/Aboutinfo'
import Ourdata from './Ourdata/Ourdata'
import Gallery from './Gallery/Gallery'

const about = () => {
  return (
    <div>
      <Hemonimg
      bgimage={bgimage}
      heading={["A little ",<span>about us & our home</span>]}
      text="The legacy being carried on for the last few decades"
      />
      <Aboutinfo/>
      <Ourdata/>
      <Gallery/>
    </div>
  )
}

export default about