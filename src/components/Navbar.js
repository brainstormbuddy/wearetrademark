import React , { Component } from 'react'
import { Link } from 'gatsby'

import LogoWhite from '../img/LogoWhite.svg'
import LogoBlack from '../img/logoBlack.svg'
import LogoYellow from '../img/LogoYellow.svg'

import TelIcon from '../img/click-to-call-icon.svg'

import userConfig from '../../config'

class Navbar extends Component {
  
  constructor(prps) {
    super(prps);
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
  
  render() { 
	  
	let url, lastUrl, contactUrl, contactLastUrl
    if (typeof window !== `undefined`) {
      url = window.location.href;
      lastUrl= url.includes("casestudy");
    } 
    if (typeof window !== `undefined`) {
      contactUrl = window.location.href;
      contactLastUrl= url.includes("contact");
    } 
	       
          return (
	        <div>  
	        {this.state.childVisible ?  
            <nav className="has-bg-black has-text-centered padding-top-2 padding-bottom-2 slide-down">
            	
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
	                  
	                  <a className="is-hidden-desktop" style={{alignItems: `center`, display: `flex`}} href="mailto:info@trademarkevents.com"><img src={TelIcon} alt="email icon" /></a>
	                  
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