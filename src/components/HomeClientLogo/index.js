import React from 'react'
import NavClient  from './Wrapper'

const ClientLogo = () => {
	
	let imgAray01 = [
	'logo-appdirect', 
	'logo-axarosenberg', 
	'logo-bausch', 
	'logo-biocare', 
	'logo-charitywater', 
	'logo-deloitte']
	
	let imgAray02 = [
	'logo-exploratorium',
	'logo-genentech',
	'logo-google',
	'logo-guardian',
	'logo-impossible',
	'logo-jaunt']
	
	let imgAray03 = [
	'logo-lacoste',
	'logo-levis21',
	'logo-lilly',
	'logo-linkedin',
	'logo-lucasfilm',
	'logo-lyft']
	
	let imgAray04 = [
	'logo-marketlive',
	'logo-medtronic',
	'logo-optimizely',
	'logo-safeway',
	'logo-slack',
	'logo-stryker']
	
	let imgAray05 = [
	'logo-vmware',
	'logo-xamarin',
	'logo-yahoo',
	'logo-zimmer',
	'okta',
	'xero']
	
	let imgAray06 = [
	'zeiss',
	'zendesk'
	];
	
	
	
	let images01 = imgAray01.map(image01 => {
         return	<img key={image01} 
         src={require(`./img/${image01}-reverse.png`)} 
         alt={`${image01}`} />  
    });
    let images02 = imgAray02.map(image02 => {
         return	<img key={image02} 
         src={require(`./img/${image02}-reverse.png`)} 
         alt={`${image02}`} />  
    });
    let images03 = imgAray03.map(image03 => {
         return	<img key={image03} 
         src={require(`./img/${image03}-reverse.png`)} 
         alt={`${image03}`} />  
    });
    let images04 = imgAray04.map(image04 => {
         return	<img key={image04} 
         src={require(`./img/${image04}-reverse.png`)} 
         alt={`${image04}`} />  
    });
    let images05 = imgAray05.map(image05 => {
         return	<img key={image05} 
         src={require(`./img/${image05}-reverse.png`)} 
         alt={`${image05}`} />  
    });
    let images06 = imgAray06.map(image06 => {
         return	<img key={image06} 
         src={require(`./img/${image06}-reverse.png`)} 
         alt={`${image06}`} />  
    });
	
		
	return (
		<div>
		<NavClient className="columns">
			{imgAray01.map((element, i)=> (
				<div key={i} className="column">
					{images01[i]}
				</div>
			))}
		</NavClient>
		<NavClient className="columns">
			{imgAray02.map((element, i)=> (
				<div key={i} className="column">
					{images02[i]}
				</div>
			))}
		</NavClient>
		<NavClient className="columns">
			{imgAray03.map((element, i)=> (
				<div key={i} className="column">
					{images03[i]}
				</div>
			))}
		</NavClient>
		<NavClient className="columns">
			{imgAray04.map((element, i)=> (
				<div key={i} className="column">
					{images04[i]}
				</div>
			))}
		</NavClient>
		<NavClient className="columns">
			{imgAray05.map((element, i)=> (
				<div key={i} className="column">
					{images05[i]}
				</div>
			))}
		</NavClient>
		<NavClient className="columns">
			{imgAray06.map((element, i)=> (
				<div key={i} className="column is-2">
					{images06[i]}
				</div>
			))}
		</NavClient>
		</div>
	)
}

export default ClientLogo