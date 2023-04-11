import React from 'react';
import './whatgpt3.css';
import Feature from '../../components/feature/Feature';
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'> 
    {/* id added to identify portion for links later */}
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          {/* above class is defined in index.css and App.css*/}
          The possibilities are beyond your imagination 
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT 3 Chatbot is a large language model chatbot capable of interacting with the user in a conversational way."/>
      <Feature title="KnowledgeBase" text="GPT-3 processes text input to perform a variety of natural language tasks. It uses both natural language generation and natural language processing to understand and generate natural human language text."/>
      <Feature title="Education" text="GPT-3 can be used to solve many problems in the education sector. It can help improve education by improving the quality of teachers, students and content." /> 
      </div>
    </div>
  )
}

export default WhatGPT3;