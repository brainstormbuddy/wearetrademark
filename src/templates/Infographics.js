import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import StrokeImg from './brush-stroke-infograph-header.png'

const InfoGraphics = (props) => {
	
	let starShapedImageURL = false
	
	if (props.info.acf.image_one_info && props.info.acf.image_one_info.source_url ) {
    	starShapedImageURL = props.info.acf.image_one_info.source_url;
  	}
	
	const starShapedImage = {
	  backgroundImage: `url(${starShapedImageURL})`,
	  width: `90%`,
	  height: `90%`,
	  position: `relative`,
	  backgroundPosition: `top center`,
	  backgroundRepeat: `no-repeat`,
	  backgroundSize: `contain`
  	}
	
	return (
	<div id="infographics">
		<h2>{props.info.acf.heading_info}</h2>
		
		<div className="columns" style={{paddingTop: `1rem`}}>
			<div className="column">
				<div dangerouslySetInnerHTML={{ __html: props.info.acf.description_info }} />
			</div>
			<div className="column has-text-centered">
				<p style={{fontFamily:`Maven Pro`, fontSize:`11px`, fontWeight: `400`, textTransform:`uppercase`, textAlign: `left`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpcing: `0.53px`}}>{props.info.acf.venue__logistics_label}</p>
				<div style={starShapedImage}>
					<div className="numberInfo">{props.info.acf.venue_number_info}</div>
					<div className="captionInfo">{props.info.acf.image_caption_info}</div>
				</div>
			</div>
			<div className="column">
				<img src={props.info.acf.image_two_info.source_url} alt="" />
			</div>
		</div>
		
		<div className="columns">
			<div className="column">
				<img src={props.info.acf.image_three_portrait.source_url} alt={props.info.acf.portrait_image_heading} />
				<h3 style={{lineHeight: `1.1`}}>{props.info.acf.portrait_image_heading}</h3>
				<hr />
				<p>{props.info.acf.portrait_image_small_text}</p>
				
				<p style={{fontFamily:`Maven Pro`, fontSize:`11px`, fontWeight: `400`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpcing: `0.53px`}}>{props.info.acf.venue_or_anything_label}</p>
				<h2>{props.info.acf.venue_or_anything_number_information}</h2>
				<p style={{textTransform: `uppercase`, fontWeight:`600`, fontSize:`14px`, letterSpacing:`2.03px`, lineHeight:`1`, padding:`0`}}>{props.info.acf.venue_or_anything_number_information_small_text}</p>
				<div className="level">
					<div className="level-item" style={{fontSize:`80px`, color: `#fff`, justifyContent:`left`}}>{props.info.acf.info_one}</div>
					<div className="level-item" 
						style={{fontSize:`25px`, color: `#fff`, lineHeight:`1.15`, maxWidth:`50%`}}>{props.info.acf.info_two}
					</div>
					<div className="level-item">
						<img style={{maxWidth:`60%`}} 
							src={props.info.acf.info_three_image.source_url} 
							alt={props.info.acf.info_two} 
						/>
					</div>
				</div>
			</div>
			<div className="column" id="colTwo">
				<p style={{fontFamily:`Maven Pro`, fontSize:`11px`, fontWeight: `400`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpcing: `0.53px`}}>{props.info.acf.logistics_label}</p>
				<br />
				
				<div className="bigText">{props.info.acf.logistics_big_text}</div>
				<div className="smallText">{props.info.acf.logistics_small_text}</div>
				
				<br /><br />
				<img src={props.info.acf.image_three_info.source_url} alt={props.info.acf.image_title_one_info} />
				<h3 style={{fontSize:`20px`, lineHeight: `1.1`, paddingTop: `1em`}}>{props.info.acf.image_title_one_info}</h3>
				
				<hr />
				<div className="smallText" style={{textTransform:`capitalize`, letterSpacing:`0.5px`, lineHeight:`1`}}>{props.info.acf.images_three_and_four_description}</div>
				<br/ ><br />
				<p style={{fontFamily:`Maven Pro`,fontSize:`11px`, fontWeight: `400`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpcing: `0.53px`}}>{props.info.acf.another_brand_label}</p>
				<br />
				<div className="bigText">{props.info.acf.another_brand_big_text}</div>
				<div className="smallText">{props.info.acf.another_brand_small_text}</div>
				
				<hr />
				
			</div>
			<div className="column" id="colThree">
				<div className="brandActivation" style={{position: `relative`}}>
					<p style={{fontFamily:`Maven Pro`,fontSize:`11px`, fontWeight: `400`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpacing: `0.53px`}}>{props.info.acf.brand_activation_label}</p>
					<img style={{position:`absolute`, right: `9em`, top: `0.5em`, maxWidth: `50%`, height: `50%`}} src={props.info.acf.brand_activation_image.source_url} />
				</div>
				
				<br />
				<div className="bigText">{props.info.acf.brand_activation_big_text}</div>
				<div className="smallText">{props.info.acf.brand_activation_small_text}</div>
				
				<br /><br />
				
				<img src={props.info.acf.image_four_info.source_url} alt={props.info.acf.image_title_one_info} style={{maxWidth:`67%`}}/>
				
			</div>
		</div>
	</div>	
	)
}
export default InfoGraphics