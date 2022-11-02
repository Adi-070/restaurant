import React,{useState} from 'react'
import './Amazingmeals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillStarFill} from 'react-icons/bs'

import image1 from "../../../Assets/burger.jpg"
import image2 from "../../../Assets/pancake.jpeg"
import image3 from "../../../Assets/pasta.jpeg"
import image4 from "../../../Assets/shwarma.jpeg"
import image5 from "../../../Assets/pizza.jpg"

import Slider from 'react-slick';

const Amazingmeals = () => {

    const [items,setitems]=useState([
        {id:1,url:image1},
        {id:2,url:image2},
        {id:3,url:image3},
        {id:4,url:image4},
        {id:5,url:image5},
    ])




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 5000 
      };


  return (
    <div className="section">
    <div className="container">
      <div className="amazing-container">
        <div className="amazing-carousal">
          <div>
            <Slider {...settings}>
              {items.map((item) => (
                <div key={item.id}>
                  <img src={item.url} alt="caurosal pic" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='amazing-content'>
          <h2 className='heading-secondary'>
          Delicious meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
          </h2>
          <h4>
            We hope to see you soon
          </h4>
          
          <p>
         Our Customer Reviews say it all :</p>
             <p>
          “Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.” – Alison B.
               </p>
         <p>“Best Pizza ever! Not just on the lower Cape…. anywhere!” – Ellen H.</p>
              
              <p>
              “This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.” – Kristine R.
            </p> <br/><br />
            <blockquote>
                Visit our about section for more such details
            </blockquote>
        </div>
      </div>
<div className='amazing-card-container'>
  <div className='amazing-card amazing-card-left'>
  <img src={image4} alt="burger" className="amazing-card-image" />

  <div className='amazing-card-content'>
  <div className='amazing-card-title'>
      <BsFillStarFill color='blue' />
      <h3 className="heading-tertiary">
      Unique <span>ingredients</span>
     </h3>
  </div>
  <p> Smoke condensates, chargrill flavours, concentrated liquid flavour systems, browning agents, yield enhancing ingredients, shelf life extenders and nutritional ingredients, all in abundance</p>
  </div>

  
   </div>
   <div className='amazing-card amazing-card-right'>
  <img src={image5} alt="Pancakes" className="amazing-card-image" />

  <div className='amazing-card-content'>
  <div className='amazing-card-title'>
      <BsFillStarFill color='blue' />
      <h3 className="heading-tertiary">
      <span>reservations</span>
     </h3> 
  </div>
  <p> Make online reservations, read Chef's food reviews from diners, and earn points towards free meals.</p>
  </div>

  
   </div>
  </div>
 </div>
</div>
  )
}

export default Amazingmeals