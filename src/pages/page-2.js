import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Wow, you made it to the second page...</h1>
    <p>Now that you're here..Hi?</p>
    <Link to="/">Now, go back to the homepage!</Link>
  </Layout>
)

export default SecondPage
