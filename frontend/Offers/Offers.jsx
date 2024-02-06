import React from 'react'
import './Offers.css'
import compare from '../Assets/compare.jpg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Compare & Save</h1>
        <h1>EXCLUSIVE DEALS ON TOP SELLERS</h1>
        <p>ACROSS AMAZON, FLIPKART AND MORE</p>
        <button>Explore Now</button>
      </div>
      <div className='offers-right'>
        <img src={compare} alt=""/>
      </div>
    </div>
  )
}

export default Offers
