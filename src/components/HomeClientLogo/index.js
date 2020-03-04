import React from 'react'
import NavClient  from './Wrapper'

const ClientLogo = () => {
	
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

		
	return (
		<div>
		<NavClient className="columns is-multiline is-mobile">
			{imgAray01.map((element, i)=> (
				<div key={i} className="column is-one-fifth">
					{images01[i]}
				</div>
			))}
		</NavClient>
		</div>
	)
}

export default ClientLogo