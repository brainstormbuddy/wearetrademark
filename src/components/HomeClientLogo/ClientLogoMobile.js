import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import NavClientMobile  from './Wrapper'

const ClientLogoMobile = () => {
	
/*
	let imgAray01 = [
	'logo-appdirect', 
	'logo-axarosenberg', 
	'logo-bausch', 
	'logo-biocare', 
	'logo-charitywater', 
	'logo-deloitte',
	
	'logo-exploratorium',
	'logo-genentech',
	'logo-google',
	'logo-guardian',
	'logo-impossible',
	'logo-jaunt',
	
	'logo-lacoste',
	'logo-levis21',
	'logo-lilly',
	'logo-linkedin',
	'logo-lucasfilm',
	'logo-lyft',
	
	'logo-marketlive',
	'logo-medtronic',
	'logo-optimizely',
	'logo-safeway',
	'logo-slack',
	'logo-stryker',
	
	'logo-vmware',
	'logo-xamarin',
	'logo-yahoo',
	'logo-zimmer',
	'okta',
	'xero',
	
	'zeiss',
	'zendesk'
	];
	
	let images01 = imgAray01.map(image01 => {
         return	<img key={image01} 
         src={require(`./img/${image01}-reverse.png`)} 
         alt={`${image01}`} 
         />  
    });	
*/
		
	const data = useStaticQuery(graphql`
		query HomeMobileClientLogoQuery {
		  wordpressPage(slug: {eq: "home"}) {
		    acf {
		      logos_client {
			    title
		        localFile {
		          childImageSharp {
		            fluid(maxWidth: 500, quality: 100) {
		              srcWebp
		              ...GatsbyImageSharpFluid
		            }
		          }
		        }
		      }
		    }
		  }
		}	
	`)
	
	
	return (
		<div>
		<NavClientMobile>
			<div className="columns" style={{opacity: `0.5`}}>
				<Carousel showIndicators={false} showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false} centerMode={false}>
					{data.wordpressPage.acf.logos_client.map((element, i)=> (
						<div key={i} className="column is-6-mobile" style={{margin:`auto`}}>
							<Img 
						fluid={element.localFile.childImageSharp.fluid} alt={element.title} />
						</div>
					))}
				</Carousel>
			</div>
		</NavClientMobile>
		</div>
	)
}

export default ClientLogoMobile