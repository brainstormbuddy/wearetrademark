import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Contact from '../components/HomeContact'

import Privacy from '../components/Privacy'

import FooterWrapper from '../components/Footer'


import userConfig from '../../config'

//import '../components/all.sass'

//import GlobalStyle from '../global-styles'

//import '../styles/page.css'
//import indexStyles from '../styles/index.module.css'

export const PageTemplate = ({ title, content, slug }) => {
  return (
    <div>
    	<Helmet title={`${title} | ${userConfig.title}`}>
			<meta name="description" content={`${content}`} />
		</Helmet>
		
		{slug == 'contact' ? (
		<section className="section has-bg-black">
	    	<div className="hero-body">
		    	<div className="container">
		    		<div className="columns is-centered">
		    			<div className="column is-three-quarters">
		    				<div className="contactTitle">
								<h2 className="has-text-white is-size-0">
									<span>Want to</span>
									<div className="rw-words rw-words-1">
										<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>chat</span>
										<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>plan</span>
										<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>create</span>
										<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>make</span>
										<div className="pulled-last">with us?</div>
									</div>
								</h2>
		    				</div>
							<Contact />
						</div>
					</div>
		    	</div>
		    </div>
	    </section>
	    ): null }
	    
	    {slug == 'about' ? (
	    	<section className="hero is-medium">
	    		<div className="hero-body">
		    		<div className="container">
		    			<h2 className="has-text-centered has-text-black title is-size-1">About</h2>
		    			<h3 className="has-text-centered has-text-black subtitle is-size-2">Coming soon</h3>
		    		</div>
		    	</div>
		    </section>
	    ): null }
	    
	    {slug == 'work' ? (
	    	<section className="hero is-fullheight">
	    		<div className="hero-body">
		    		<div className="container">
		    			<h2 className="has-text-centered has-text-black title is-size-1">Work - Our latest reel</h2>
		    			<h3 className="has-text-centered has-text-black subtitle is-size-2">Coming soon</h3>
		    		</div>
		    	</div>
		    </section>
	    ): null }
	    
	    {slug == 'blog' ? (
	    	<section className="hero is-medium">
	    		<div className="hero-body">
		    		<div className="container">
		    			<h2 className="has-text-centered has-text-black title is-size-1">Blog</h2>
		    			<h3 className="has-text-centered has-text-black subtitle is-size-2">Coming soon</h3>
		    		</div>
		    	</div>
		    </section>
	    ): null }
	    
	    {slug == 'privacy-policy' ? (
	    	<Privacy />
	    ): null }
	    
	    {slug == 'sitemap' ? (
	    	<section className="hero is-medium">
	    		<div className="hero-body">
		    		<div className="container">
		    			<h2 className="has-text-centered has-text-black title is-size-1">Sitemap</h2>
		    			<h3 className="has-text-centered has-text-black subtitle is-size-2">Coming soon</h3>
		    		</div>
		    	</div>
		    </section>
	    ): null }
	    
	<FooterWrapper />
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate 
      title={page.title} 
      content={page.content}
      slug={page.slug}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
    }
  }
`
