import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <div>
      <p>Practice practice</p>
      <p>Practice makes perfect</p>
      <p>Practice now</p>
      <p>Will one day be worth it</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
