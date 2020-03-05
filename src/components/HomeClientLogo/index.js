import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import NavClient  from './Wrapper'

const ClientLogo = () => {
	
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
         alt={`${image01}`} />  
    });
*/
    
    const data = useStaticQuery(graphql`
		query HomeClientLogoQuery {
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
		<NavClient className="columns is-multiline is-mobile" style={{opacity: `0.5`}}>
			{data.wordpressPage.acf.logos_client.map((element, i)=> (
				<div key={i} className="column is-one-fifth">
					<Img 
						fluid={element.localFile.childImageSharp.fluid} alt={element.title} />
				</div>
			))}
		</NavClient>
		</div>
	)
}

export default ClientLogo