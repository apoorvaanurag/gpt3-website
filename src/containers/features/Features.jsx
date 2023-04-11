import React from 'react'
import './features.css'
import Feature from 'E:/WebDev/React/gpt3-website/src/components/feature/Feature';
const FeaturesData = [
  {
    title:'Speedy Content Creation',
    text:' Utilizing GPT models to streamline and accelerate content creation processes, enabling businesses to produce more content in less time.',
  },
  {
    title:'Enhanced Customer Experience',
    text:'Employing advanced chatbot technology powered by GPT models to improve customer support and drive better user experiences.',
  },
  {
    title:'Multilingual Communication Revolution',
    text:'Leveraging GPT models to revolutionize multilingual communication, allowing people from different linguistic backgrounds to communicate with ease.',
  },
  {
    title:'Medical Research Advancements',
    text:'Pushing the boundaries of medical research with the help of GPT models, enabling faster and more accurate diagnosis and treatment of illnesses.',
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>
        Request Early Access to Get Started
        </p>
      </div>
      <div className="gpt3__features-container">
        {FeaturesData.map((item,index)=>(
          <Feature title={item.title} text ={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features