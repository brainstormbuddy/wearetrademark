import React , { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import LogoWhite from '../img/LogoWhite.svg'
import LogoBlack from '../img/logoBlack.svg'
import LogoYellow from '../img/LogoYellow.svg'

import TelIcon from '../img/click-to-call-icon.svg'
import EmailIcon from '../img/contact-icon.svg'

import userConfig from '../../config'

class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
  
  render() { 
	  
	let url, 
	lastUrl, 
	contactUrl, 
	contactLastUrl, 
	aboutUrl, 
	aboutLastUrl, 
	blogUrl, 
	blogLastUrl,
	privacyUrl,
	privacyLastUrl,
	sitemapUrl,
	sitemapLastUrl,
	workUrl,
	workLastUrl
	
	
    if (typeof window !== `undefined`) {
      url = window.location.href;
      lastUrl= url.includes("casestudy");
    } 
    if (typeof window !== `undefined`) {
      contactUrl = window.location.href;
      contactLastUrl= contactUrl.includes("contact");
    } 
    
    if (typeof window !== `undefined`) {
      workUrl = window.location.href;
      workLastUrl= workUrl.includes("work");
    }
    
    if (typeof window !== `undefined`) {
      aboutUrl = window.location.href;
      aboutLastUrl= aboutUrl.includes("about");
    }
    if (typeof window !== `undefined`) {
      blogUrl = window.location.href;
      blogLastUrl= blogUrl.includes("blog");
    }
    if (typeof window !== `undefined`) {
      privacyUrl = window.location.href;
      privacyLastUrl= privacyUrl.includes("privacy-policy");
    }
    if (typeof window !== `undefined`) {
      sitemapUrl = window.location.href;
      sitemapLastUrl= sitemapUrl.includes("sitemap");
    }
    
	       
          return (
	        <div>  
	        {this.state.childVisible ?  
            <nav className="has-bg-black has-text-centered padding-top-2 padding-bottom-2 slide-down">
            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
				<body className="home xtrademark navDown" />
			</Helmet>
			{workLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page Work navDown" />
				</Helmet>
	        ): null}
	        {lastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="single casestudy xtrademark navDown" />
				</Helmet>
	        ): null}
            {aboutLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page About navDown" />
				</Helmet>
	        ): null}
            {contactLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page Contact navDown" />
				</Helmet>
	        ): null}
	        {blogLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page Blog navDown" />
				</Helmet>
	        ): null}
	        {privacyLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page Privacy Policy navDown" />
				</Helmet>
	        ): null}
	        {sitemapLastUrl ? (
	            <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<body className="page Sitemap navDown" />
				</Helmet>
	        ): null}
            	
            	<div className="mobile-menu is-mobile is-hidden-desktop columns has-text-left">
            		<div className="column">
	                  <Link
	                    className="navbar-item"
	                    to="/"
	                  >
	                    Home
	                  </Link>
	                  <Link
	                    className="navbar-item"
	                    to="work"
	                  >
	                    Work
	                  </Link>
	                  
	                  <Link
	                    className="navbar-item"
	                    to="about"
	                  >
	                    About
	                  </Link>
	                  
	                  <Link
	                    className="navbar-item"
	                    to="contact"
	                  >
	                    Contact
	                  </Link>
	                  
	                  <Link
	                    className="navbar-item"
	                    to="blog"
	                  >
	                    Blog
	                  </Link>
	                </div>
				</div>
            	
            	<div className="container">
	                <div className="navbar-brand level-item has-text-centered">
	                  
	                  <a className="is-hidden-desktop" style={{alignItems: `center`, display: `flex`}}><img src={TelIcon} alt="telephone icon" /></a>
	                  
	                  <a onClick={() => this.onClick()} className="yellowLogo">
	                  {this.state.childVisible ? 
	                  <img src={LogoYellow} alt="X Trademark Yellow logo" />
	                  : <img src={LogoBlack} alt="X Trademark Black logo" /> }
	                  </a>
	                  
	                  <a className="is-hidden-desktop" style={{alignItems: `center`, display: `flex`}} href="mailto:info@trademarkevents.com"><img src={EmailIcon} alt="email icon" /></a>
	                  
	                </div>
	                <div id="navMenu" className="level-item">
	                  {this.state.childVisible ?
	                  <div className="level-item has-text-centered">
	                      <Link
	                        className="navbar-item"
	                        to="/"
	                      >
	                        Home
	                      </Link>
	                      <Link
	                        className="navbar-item"
	                        to="work"
	                      >
	                        Work
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="about"
	                      >
	                        About
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="contact"
	                      >
	                        Contact
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="blog"
	                      >
	                        Blog
	                      </Link>
	                  </div>
	                  : null }
	              </div>
              </div>
            </nav>
            : <nav className="has-text-centered padding-top-2 slide-up"> 
                <div className="container">
	                <div className="navbar-brand level-item has-text-centered">
	                  
	                  <a onClick={() => this.onClick()} className="blackLogo">
	                  {this.state.childVisible ? 
	                  <img src={LogoYellow} alt="X Trademark Yellow logo" />
	                  : 
		                <img src={LogoBlack} alt="X Trademark Black logo" className="BlackLogo"/>
	                  }
	                  
	                  {lastUrl ? 
			            <img src={LogoWhite} alt="X Trademark White logo" className="WhiteLogo"/>
			           : null }	                  
	                  
	                  {contactLastUrl ?(
		                 <img src={LogoWhite} alt="X Trademark White logo" className="WhiteLogo is-hidden-tablet"/> 
		              ): null}
	                  
	                  </a>
	                </div>
	                <div id="navMenu" className="level-item">
	                  {this.state.childVisible ?
	                  <div className="level-item has-text-centered">
	                      <Link
	                        className="navbar-item"
	                        to="/"
	                      >
	                        Home
	                      </Link>
	                      <Link
	                        className="navbar-item"
	                        to="work"
	                      >
	                        Work
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="about"
	                      >
	                        About
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="contact"
	                      >
	                        Contact
	                      </Link>
	                      
	                      <Link
	                        className="navbar-item"
	                        to="blog"
	                      >
	                        Blog
	                      </Link>
	                  </div>
	                  : null }
	              </div>
              </div>
            </nav>
            }
        </div>
    );
  }
};

export default Navbar;