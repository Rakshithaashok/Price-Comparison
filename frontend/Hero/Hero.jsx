import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Best Deals Across Platform</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>Hot</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>Picks from</p>
            <p>Top Retailers</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Compare Prices Instantly</div>
            <img src={arrow_icon} alt=""/>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
