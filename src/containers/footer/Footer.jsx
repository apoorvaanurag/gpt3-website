import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer_heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
        </div>
        <div className="gpt3__footer_button">
          <p>
            Request Early Access
          </p>
        </div>
        <div className="gpt3__footer_links">
          <div className="gpt3__footer_links_logo">
            <img src={gpt3logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer_links_div">
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
            <p>Overons</p>
          </div>
          <div className="gpt3__footer_links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer_links_div">
            <h4>Get in Touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
          <div className='gpt3__footer_copyright'>
            <p>© 2021 GPT-3. All rights reserved.</p>
          </div>
        </div>
      

    </div>
  )
}

export default Footer