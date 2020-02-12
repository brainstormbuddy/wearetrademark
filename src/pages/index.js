import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import SectionWhatMarkWillYouLeave from '../components/HomeTopSection'
import SectionAbout from '../components/HomeAbout'
import SectionCasestudy from '../components/HomeCasestudy'
import SectionClientLogo from '../components/HomeClientLogo'
import Contact from '../components/HomeContact'

//import userConfig from '../../config'
//import Navbar from '../components/Navbar'


//import '../components/all.sass'
//import GlobalStyle from '../global-styles'


import ClientLogo from '../img/logo-farm.png'
import ClientLogo2x from '../img/logo-farm@2x.png'

export default class TemplateWrapper extends React.Component{
	
	constructor() {
	    super();
	}
	
	//toggleSidenav() {
	//    this.setState({close: !this.state.close})
	//}

	render() {
   
	//	let sidebar_close = 'crt crt-side-box-on crt-nav-on crt-nav-type2 crt-main-nav-on crt-sidebar-on crt-layers-1'; 
	  
	//	let sidebar_open = 'crt crt-side-box-on crt-nav-on crt-nav-type2 crt-main-nav-on crt-sidebar-on crt-layers-1 crt-sidebar-opened';
	  
	//	let sidebar_status = this.state.close ? `${sidebar_close}` : `${sidebar_open}`;
	    
	//    let social_sidebar ='text-primary';
    
		return(
		    <Layout>
			    <section className="section bg-white hero is-fullheight" id="watchVideo">
			    	<div className="hero-body">
				    	<div className="container">
				    		<SectionWhatMarkWillYouLeave />
				    	</div>
				    </div>
			    </section>
			    
			    <SectionAbout />
			    
			    <section className="section bg-pink hero is-fullheight" id="caseStudy">
					<SectionCasestudy />
			    </section>
			    <section className="section bg-green hero is-fullheight" id="logos">
			    	<div className="hero-body">
				    	<div className="container">
				    		<SectionClientLogo />
				    	</div>
				    </div>
			    </section>
			    <section className="section hero has-bg-black is-fullheight" id="homeContactForm">
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
		    
		    </Layout>
		);
	}
}