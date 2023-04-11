import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './import.js'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog__header">
        <h1 className="gradient__text">
        A lot is happening. We are blogging about it.
        </h1>
        <div className="gpt3__blog_container">
          <div className="gpt3__blog__container_groupA">
            <Article imgURL={blog01} date='20 Feb 2023' title='GPT-3 and Open  AI is the future. Let us explore how it is?'/>
          </div>
          <div className="gpt3__blog__container_groupB">
          <Article imgURL={blog02} date='24 Jan 2023' title='The Impact of OpenAI&apos;s GPT-3 on the Future of Computing'/>
          <Article imgURL={blog03} date='20 Jan 2023' title='Exploring the Boundless Potential of OpenAI&apos;s GPT-3 Language Model'/>
          <Article imgURL={blog04} date='10 Dec 2022' title='Inside OpenAI&apos;s GPT-3: A Look at the Technology Behind the Buzz'/>
          <Article imgURL={blog05} date='1 Dec 2022  ' title='OpenAI&apos;s GPT-3: Impacting the Future of AI and Language'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog