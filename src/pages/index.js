import React from "react"

import Layout from "../components/layout"
import './../components/index.css'
import animoji from './../images/animoji.jpeg'
import SecondPage from "./page-2"

const IndexPage = () => (
  <Layout>
    <div className='body'>
      <div className='poem'>
        <p className='lines'>Welcome to the void</p>
        <p className='lines'>The one with no past</p>
        <p className='lines'>Type one android</p>
        <p className='lines'>Built to last</p>
      </div>
      <div className='imageRow'>
        <img className='animoji' src={animoji} alt='animoji'/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
