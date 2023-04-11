import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>Welcome! Here, we explore the limitless possibilities of GPT-3 technology and its potential to transform the world. Join us on this journey of discovery and innovation by signing up for our email newsletter below</p>
        <div className='gpt3__header-content_input'>
          <input type='email' placeholder='Your email here' id="" />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content-people">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="" />
        </div>
    </div>
  )
}

export default Header