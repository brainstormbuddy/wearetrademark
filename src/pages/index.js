import React from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'

import userConfig from '../../config'

import '../styles/home.css'

import Navbar from '../components/Navbar'
import SectionWhatMarkWillYouLeave from '../components/HomeTopSection'
import SectionAbout from '../components/HomeAbout'
import SectionCasestudy from '../components/HomeCasestudy'
import SectionClientLogo from '../components/HomeClientLogo'
import SectionClientLogoMobile from '../components/HomeClientLogo/ClientLogoMobile'
import Contact from '../components/HomeContact'
import FooterWrapper from '../components/Footer'

const FullPage = () => (

	<div>
		<Helmet title={`${userConfig.name} | ${userConfig.title}`}>
			<meta name="google-site-verification" content={`${userConfig.googleSiteVerification}`} />
			<meta name="author" content={`${userConfig.author}`} />
			<meta name="description" content={`${userConfig.description}`} />
			<body className="home xtrademark" />
		</Helmet>
	
		<ReactFullpage
	
	    	//fullpage options
			licenseKey = {'YOUR_KEY_HERE'}
			scrollingSpeed = {700} /* Options here */
			scrollHorizontallyKey = {'YOUR KEY HERE'}
			scrollBar = {true}
			css3 = {true}
			fitToSection ={true}
			responsiveWidth = {768}
	
			render={({ state, fullpageApi }) => {
		    
				return(
				    	<ReactFullpage.Wrapper>
				    	
				    	<div className="arrowTopBottom">
				    		<div className="arrowBG">
				    		<a onClick={() => fullpageApi.moveSectionUp()}>
				    		<i className="up"></i></a>
				    		<a onClick={() => fullpageApi.moveSectionDown()}>
				    		<i className="down"></i>
				    		</a>
				    		</div>
				    	</div>
				    	
					    <section className="section" style={{padding: `0`}}>
					    	<Navbar />
						    <div className="container">
						    	<SectionWhatMarkWillYouLeave />
						    </div>
					    </section>
					    
					    <SectionAbout />
					    
					    <section className="section" id="caseStudy">
							<SectionCasestudy />
					    </section>
					    <section className="section hero bg-green is-hidden-mobile" id="logos">
				    		<div className="hero-body">
					    		<div className="container">
					    			<SectionClientLogo />
					    		</div>
					    	</div>
					    </section>
				    	<section className="bg-green is-hidden-tablet">
					    	<div className="container">
					    		<SectionClientLogoMobile />
					    	</div>
					    </section>
					    <section className="section has-bg-black" id="homeContactForm">
						    	<div className="container">
						    		<div className="columns is-mobile is-centered">
						    			<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet">
						    				<div className="contactTitle">
												<h2 className="has-text-white is-size-0">
													<span>Want to</span>
													<div className="rw-words rw-words-1">
														<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>&nbsp;chat</span>
														<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>&nbsp;plan</span>
														<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>&nbsp;create</span>
														<span style={{color: `#F2ED66`, letterSpacing: `-0.06px`}}>&nbsp;make</span>
													</div>
													<span>&nbsp;with us?</span>
												</h2>
						    				</div>
											<Contact />
										</div>
									</div>
						    	</div>
					    </section>
					<FooterWrapper />
				</ReactFullpage.Wrapper>
				);
	 		}}
	 	/>
	</div>
);

export default FullPage