import React from 'react'
import './Ourchefs.css'

const Ourchefs = () => {
  return (
    <div>
        <div className='chef-img'>
          <div className='container'>
            <div className='chef-content'>
                <h1 className='heading-primary'>
                    Our chefs
                </h1>
                <p className='text-white'>
                    The salt is to the sustenance, what the soul is to the body.
                </p>
            </div>
          </div>
          </div>
          <div className='container'>
              <div className='grid-container py-md'>
                <div className='grid-item-chef-info'>
                    <h3 className='heading-tertiary'>
                        Joan Roca
                    </h3> <br />
                    <h4>Roast chef</h4>
                    <br />
                    <p>
                    Joan Roca strikes a unique balance between being a hometown hero and a globally renowned chef. He has acquired a wealth of experience over his years running El Celler de Can Roca and maintaining it’s visionary status has meant hiring hospitality professionals that share his attitude, desire, and drive.
                    </p>
                </div>
                
                
                <div className='grid-item-chef-info'>
                    <h3 className='heading-tertiary'>
                        Rene Redzepi
                    </h3> <br />
                    <h4>Executive chef</h4>
                    <p> <br/>
                    Few chefs can claim to have shaped the culinary panorama of the early 21st century like René Redzepi. His unique take on Scandinavian cuisine took locally sourced, caught and foraged ingredients, and presented them as an artful expression of the Nordic region’s culture, landscape and seasons.
                    </p>
                </div>
                
                
                <div className='grid-item-chef-info'>
                    <h3 className='heading-tertiary'>
                        Bobby Flay
                    </h3> <br />
                    <h4>Sous chef</h4>
                    <br />
                    <p>
                    Bobby Flay brings the excitement of the Food Network show stage into your home kitchen, with more than 100 recipes for breakfast and brunch, weeknight-worthy dinners, and stunning desserts that make every meal a winner. 
                    </p>
                </div>
                
                
                <div className='grid-item-chef-info'>
                    <h3 className='heading-tertiary'>
                        Guy Fieri
                    </h3> <br/>
                    <h4>Grill chef</h4>
                    <br />
                    <p>
                    In Fieri's words, cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.
                    </p>
                </div>
                </div>
          </div>
    </div>
  )
}

export default Ourchefs