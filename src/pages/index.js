import React from "react"

import Layout from "../components/layout"
import './../components/index.css'
import animoji from './../images/animoji.jpeg'
import {Link} from 'gatsby'
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
        <a href='./page-2/' className='arrowLeft'>
          O
        </a>
        <a href='./page-3/'className='arrowRight'>
          O
        </a>
      </div>
    </div>
  </Layout>

)

export default IndexPage
