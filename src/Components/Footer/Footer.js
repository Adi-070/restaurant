import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='section footer'>
      <div className='container'>
        <div className='grid-container'>
          <div className='footer-grid-item'>
            <h3>Chef's food Bangalore</h3><br />
            <p>Nagenahalli Gate</p>
            <p>Bengaluru, Karnataka</p>
            <p>080888 9804</p><br />
            <Link to="#" classname='text-white'>
            B'lore@chef's-food-restaurant.com
            </Link>
          </div>
          <div className='footer-grid-item'>
            <h3>Chef's food Kolkata</h3><br />
            <p>Naktala Road, Garia</p>
            <p>Kolkata, West Bengal</p>
            <p>080648 7604</p><br />
            <Link to="#" classname='text-white'>
            Kol@chef's-food-restaurant.com
            </Link>
          </div>
          <div className='footer-grid-item'>
            <h3>Chef's food Bhubaneswar</h3><br />
            <p>Nikantha nagar, Nayapalli</p>
            <p>Bhubaneswar, Odisha</p>
            <p>098088 6144</p><br />
            <Link to="#" classname='text-white'>
            Bbsr@chef's-food-restaurant.com
            </Link>
          </div>
          <div className='footer-grid-item'>
            <h3>Chef's food Pune</h3><br />
            <p>Shivari complex, Viman Nagar</p>
            <p>Pune, Maharashtra</p>
            <p>076088 6114</p><br />
            <Link to="#" classname='text-white'>
            pune@chef's-food-restaurant.com
            </Link>
          </div>
        </div>
      </div>
      <div>
    </div>
    </div>
  )
}

export default Footer