import React from 'react'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'


import Navbar from '../components/Navbar'
import SectionWhatMarkWillYouLeave from '../components/HomeTopSection'
import SectionAbout from '../components/HomeAbout'
import SectionCasestudy from '../components/HomeCasestudy'
import SectionClientLogo from '../components/HomeClientLogo'
import Contact from '../components/HomeContact'
import FooterWrapper from '../components/Footer'


//import '../components/all.sass'


import ClientLogo from '../img/logo-farm.png'
import ClientLogo2x from '../img/logo-farm@2x.png'


const FullPage = () => (

//export default class TemplateWrapper extends React.Component{
	
//	constructor() {
//	    super();
//	}
	
	//toggleSidenav() {
	//    this.setState({close: !this.state.close})
	//}
	
	<ReactFullpage
	
    	//fullpage options
		licenseKey = {'YOUR_KEY_HERE'}
		scrollingSpeed = {1000} /* Options here */
		scrollHorizontally = {true}  /* Because we are using the extension */
		scrollHorizontallyKey = {'YOUR KEY HERE'}
		scrollBar = {true}
		//paddingTop = '3em'
		//paddingBottom = '3em'
	
	render={({ state, fullpageApi }) => {
    
		return(
		    	<ReactFullpage.Wrapper>
			    <section className="section fp-auto-height" id="watchVideo" style={{padding: `0 0 3rem`}}>
			    	<Navbar />
				    <div className="container">
				    	<SectionWhatMarkWillYouLeave />
				    </div>
			    </section>
			    
			    <SectionAbout />
			    
			    <section className="section" id="caseStudy">
					<SectionCasestudy />
			    </section>
			    <section className="section bg-green" id="logos">
			    	<div className="hero-body">
				    	<div className="container">
				    		<div className="is-hidden-mobile">
				    			<SectionClientLogo />
				    		</div>
				    	</div>
				    </div>
			    </section>
			    <section className="section has-bg-black" id="homeContactForm">
			    	<div className="hero-body">
				    	<div className="container">
				    		<div className="columns is-mobile is-centered">
				    			<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet">
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
			    <FooterWrapper />
			    </ReactFullpage.Wrapper>
		);
	 }}
	/>
);

export default FullPage