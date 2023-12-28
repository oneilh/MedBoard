import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import doc1 from '../images/doctor-1.jpg'
import doc2 from '../images/doctor-2.jpg'
import doc3 from '../images/doctor-3.jpg'
import doc4 from '../images/doctor-4.jpg'




const HosStaff = () => {
  
  const settings =  {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <div className="staff">
        <h2>HOSPITAL STAFF</h2>
      </div>
      <div className="staffimages">
        <Slider >
        <div><img src={ doc1 } alt="" /></div>
        <div><img src={ doc2 } alt="" /></div>
        <div><img src={ doc3 } alt="" /></div>
        <div><img src={ doc4 } alt="" /></div>
        </Slider>
      </div>
    </div>
  )
}

export default HosStaff
