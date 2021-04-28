import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <div className='body'>
    <div className='secondPoem'>
      <p>Practice practice</p>
      <p>Practice makes perfect</p>
      <p>Practice now</p>
      <p>Will one day be worth it</p>
    </div>
    <div className='imageRow'>
      <Link to="/page-2/" className='arrowLeft'></Link>
      <Link to='/'className='arrowCenter'></Link>
      <Link to='page-3' className='arrowRight'></Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
