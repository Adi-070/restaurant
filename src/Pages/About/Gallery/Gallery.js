import React from 'react'
import './Gallery.css'

import image1 from "../../../Assets/chef1.jpeg"
import image2 from "../../../Assets/brownie.jpeg"
import image3 from "../../../Assets/Fried Mushrooms.jpeg"
import image4 from "../../../Assets/chef.jpg"
import image5 from "../../../Assets/Grilled Salmon.jpeg"
import image6 from "../../../Assets/Chicken with leek&sauce.jpeg"
import image7 from "../../../Assets/Cheesecake.jpeg"
import image8 from "../../../Assets/shwarma.jpeg"
import image9 from "../../../Assets/seafood.jpeg"
import image10 from "../../../Assets/gourmetfish.jpeg"
import image11 from "../../../Assets/chef2.jpeg"
import image12 from "../../../Assets/pasta.jpeg"

const Gallery = () => {
  return (
    <div className='gallery'>
    <figure className='gallery__item gallery__item-1'>
        <img src={image1} alt=" 1" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-2'>
        <img src={image2} alt=" 2" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-3'>
        <img src={image3} alt=" 3" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-4'>
        <img src={image4} alt=" 4" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-5'>
        <img src={image5} alt="5" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-6'>
        <img src={image6} alt=" 6" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-7'>
        <img src={image7} alt=" 7" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-8'>
        <img src={image8} alt="8" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-9'>
        <img src={image9} alt=" 9" className='gallery__img' />
    </figure>

    <figure className='gallery__item gallery__item-10'>
        <img src={image10} alt="10" className='gallery__img' />
    </figure>
    <figure className='gallery__item gallery__item-10'>
        <img src={image11} alt="11" className='gallery__img' />
    </figure>
    <figure className='gallery__item gallery__item-10'>
        <img src={image12} alt="12" className='gallery__img' />
    </figure>
</div>
  )
}

export default Gallery