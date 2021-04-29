import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <div className='body'>
    <div className='thirdPoem'>
      <p>0000000</p>
      <p>0000000</p>
      <p>xxxxxxx</p>
      <p>xxxxxxx</p>
    </div>
    <div className='imageRow'>
      <Link to="/page-2/" className='arrowLeft'></Link>
      <Link to='/'className='arrowCenter'></Link>
      <Link to='page-3' className='arrowRight'></Link>
      </div>
    </div>
  </Layout>
)

export default ThirdPage
