import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import './all.sass'

import GlobalStyle from '../global-styles'
import userConfig from '../../config'

//import FooterWrapper from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
    	<meta name="google-site-verification" content={`${userConfig.googleSiteVerification}`} />
		<meta name="author" content={`${userConfig.author}`} />
		<meta name="description" content={`${userConfig.description}`} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    {/*<FooterWrapper />*/}
  </div>
)

export default TemplateWrapper
