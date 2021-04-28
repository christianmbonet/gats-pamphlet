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
        <p>Welcome to the void</p>
        <p>The one with no past</p>
        <p>Type one android</p>
        <p>Built to last</p>
      </div>
      <div className='imageRow'>
        <Link to="/page-2/" className='arrowLeft'></Link>
        <Link to='/'className='arrowCenter'></Link>
        <Link to='page-3' className='arrowRight'></Link>
      </div>
    </div>
  </Layout>

)

export default IndexPage
