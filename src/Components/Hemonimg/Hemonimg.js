import React from 'react'
import './Hemonimg.css'

const Hemonimg = (props) => {
  return (
    <div className='container' style={{background: `url(${props.bgimage}) no-repeat bottom center/cover`,
    height:"80vh"
    }}>
        <div className='banner-content'>
            <h1 className='heading-primary' style={{color:"black",fontSize:"40px"}}>{props.heading}</h1><br/><br/><br/>
            <br/> <br/> <br/> <br/> 
            <br/> <br/> <br/> <br/>
            <br/> <br/> <br/><br/>
            <p className='text-white'style={{color:"black",fontSize:"20px"}}>{props.text}</p>
        </div>

    </div>
  )
}

export default Hemonimg