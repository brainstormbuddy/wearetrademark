import React from 'react'

import StrokeImg from './brush-stroke-infograph-header.png'
import Trash from './restore_from_trash_24px.svg'
import Truck from './truck.svg'

const InfoGraphics = () => {
	return (
	<div id="infographics">
		<h2>An unconventional space and experience designed for all</h2>
		
		<div className="columns" style={{paddingTop: `1rem`}}>
			<div className="column">
				<h3>The mark:</h3>
				<p>To expand and develop the 2019 Annual Frontiers Conference for Slack’s rapidly growing and diverse audience. Our plan? More inclusivity. More accessibility. More amazing than ever.</p>
				<ul>
					<li>A bespoke birch stage set–designed and built by our own model shop</li>
					<li>Catering for all dietary restrictions</li>
					<li>A range of keynote and breakout speakers</li>
					<li>Japanese translation</li>
					<li>Closed captioning</li>
					<li>Mother’s rooms</li>
					<li>Gender neutral restrooms</li>
					<li>Presented Slack on the world stage right before direct offering on the NYSE</li>
				</ul>
			</div>
			<div className="column has-text-centered">
				<p style={{fontSize:`11px`, textTransform:`uppercase`, textAlign: `left`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`}}>Venue</p>
				<img src="https://picsum.photos/317/325.jpg" alt="" />
				<p style={{padding:`0 5rem`,fontSize:`15px`, lineHeight: `1.35`, textTransform:`uppercase`}}>Sq ft of conference space</p>
			</div>
			<div className="column hero-body">
				<img src="https://picsum.photos/523/385.jpg" alt="" />
			</div>
		</div>
		
		<div className="columns">
			<div className="column">
				<img src="https://picsum.photos/456/471.jpg" alt="" />
				<h3 style={{fontSize:`25px`, lineHeight: `1.25`}}>Product Understanding Increased</h3>
				<hr />
				<p>Attendees were schooled on how to share channels for enterprise, build workflow, and integrate Slack and email.</p>
				
				<p style={{fontSize:`11px`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`}}>Venue</p>
				<h2>2,000+</h2>
				<p style={{textTransform: `uppercase`, fontWeight:`600`, fontSize:`16px`}}>Attendees</p>
				<div className="level">
					<div className="level-item" style={{fontSize:`80px`, color: `#fff`, justifyContent:`left`}}>0</div>
					<div className="level-item" style={{fontSize:`30px`, color: `#fff`, justifyContent:`left`, lineHeight:`1.25`}}>Garbage Cans <br />Overflowing</div>
					<div className="level-item"><img src={Trash} /></div>
				</div>
			</div>
			<div className="column">
				<p style={{fontSize:`11px`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`}}>Logistics</p>
				<br />
				<div style={{backgroundImage:`url(${Truck})`, backgroundRepeat:`no-repeat`, backgroundPosition:`center`, width: `337px`, height: `108px`, color:`#fff`}}><span style={{fontSize:`55px`, fontWeight:`700`, paddingLeft: `10px`}}>260</span> <span style={{fontSize:`24px`, textTransform:`uppercase`}}>Semis</span></div>
				<br />
				<img src="https://picsum.photos/403/269.jpg" alt="" />
				<h3>Serena Williams and</h3><hr />
				<p>Both inspired audiences with personal stories. </p>
				<br/ ><br />
				<h3>Hands-on Activations:</h3><hr />
				<ul>
					<li>Mad-lib magnets</li>
					<li>Slack Resource Library</li>
					<li>Postcard station</li>
					<li>Molly Moon’s ice cream</li>
					<li>Plinko</li>
					<li>Created a Slack for Good experience, with buttons for attendees to wear to show their commitment to hiring formerly incarcerated tech workers</li>
					<li>Brought customer stories to life in a colorful main exhibit</li>
				</ul>
			</div>
			<div className="column">
				<p style={{fontSize:`11px`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`}}>Catering & Hospitality</p>
				<h2 style={{textAlign:`center`, fontSize:`60px`, fontWeight:`700`, paddingTop: `2rem`}}>14,274</h2>
				<h4 style={{textAlign:`center`,fontSize:`24px`, textTransform:`uppercase`, color:`#fff`, paddingBottom: `0.35rem`}}>Meals Served</h4>
				<img src="https://picsum.photos/272/269.jpg" alt="" />
				<h3>Dr. Mae Jemison</h3><hr />
				<img src="https://picsum.photos/404/269.jpg" alt="" />
			</div>
		</div>
		
		
		
		
	</div>	
	)
}
export default InfoGraphics