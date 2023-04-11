import React from 'react'
import './possibility.css'
import poss from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility_img">
        <img src= {poss} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>With its advanced natural language processing capabilities, GPT-3 has the potential to revolutionize industries and change the way we interact with technology. From generating creative content to powering chatbots and virtual assistants, GPT-3 is opening up a world of new possibilities and transforming the way we approach problem-solving.</p>
        <h4>
        Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility