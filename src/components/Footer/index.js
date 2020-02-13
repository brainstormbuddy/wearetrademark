import React from 'react'
import { Link } from 'gatsby'

import Footer from './Wrapper'
import Social from './Social'
import FooterNavbar from './FooterNav'

import FooterLogo from './FooterLogo.svg'

const FooterWrapper = () => {
	return(
		<Footer className="section is-medium fp-auto-height">
		<div className="hero-body">
	      <div className="container">
	      	<div className="columns">
	      		<div className="column">
	      			<div className="columns" style={{alignItems:`flex-end`, color: `#000`, fontWeight: `700`, lineHeight: `1.5`}}>
	      				<div className="column has-text-centered is-one-third" id="footer-logo">
	      					<Link to="/" 
	      						className="logo">
		  						<img src={FooterLogo} alt="X Trademark logo" style={{ width: '100px', height: '137px'}}/>
	      					</Link>
		  				</div>
		  				<div className="column" style={{lineHeight:`2.4`}}>What mark will you leave?</div>
	      			</div>
	      		</div>
	      		<div className="column">
	      			<FooterNavbar />
	      			<Social />
		  			<p>©2020 Trademark Event Productions, Inc. | <Link to="privacy-policy">Privacy</Link> | <Link to="sitemap">Sitemap</Link></p>
		  		</div>
		  	</div>
	      </div>
	      </div>
		</Footer>
	)	
}

export default FooterWrapper