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
      <p>Will one day</p>
      <p>Be worth it</p>
    </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
