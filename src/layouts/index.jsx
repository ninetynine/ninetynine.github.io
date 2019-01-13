import React from 'react'
import { Helmet } from 'react-helmet'

import Page from '../components/page'
import '../styles/app.scss'

export default ({ children }) => (
  <Page>
    <Helmet>
      <title>Ninety Nine</title>
    </Helmet>
    {children}
  </Page>
)
