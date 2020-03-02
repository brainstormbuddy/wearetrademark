import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import StrokeImg from './brush-stroke-infograph-header.png'

const InfoGraphics = (props) => {
	
	let starShapedImageURL, threeImage, brandActivationImage, rightImage, imageTwoInfo, imageThreePortrait, imageThreeInfo, imageFourInfo, extraImageOne, extraImageTwo, anotherBrandRightImage, logisticsImage, extraTextBoxTestimonial = false
	
	if (props.info.acf.image_one_info && props.info.acf.image_one_info.source_url ) {
    	starShapedImageURL = props.info.acf.image_one_info.source_url;
  	}
  	if (props.info.acf.info_three_image && props.info.acf.info_three_image.source_url ) {
    	threeImage = props.info.acf.info_three_image.source_url;
  	}
  	if (props.info.acf.brand_activation_image && props.info.acf.brand_activation_image.source_url ) {
    	brandActivationImage = props.info.acf.brand_activation_image.source_url;
  	}
  	
  	if (props.info.acf.image_two_info && props.info.acf.image_two_info.source_url ) {
    	imageTwoInfo = props.info.acf.image_two_info.source_url;
  	}
  	if (props.info.acf.image_three_portrait && props.info.acf.image_three_portrait.source_url ) {
    	imageThreePortrait = props.info.acf.image_three_portrait.source_url;
  	}
  	if (props.info.acf.image_three_info && props.info.acf.image_three_info.source_url ) {
    	imageThreeInfo = props.info.acf.image_three_info.source_url;
  	}
  	if (props.info.acf.image_four_info && props.info.acf.image_four_info.source_url ) {
    	imageFourInfo = props.info.acf.image_four_info.source_url;
  	}
  	if (props.info.acf.extra_image_one && props.info.acf.extra_image_one.source_url ) {
    	extraImageOne = props.info.acf.extra_image_one.source_url;
  	}
  	if (props.info.acf.extra_image_two && props.info.acf.extra_image_two.source_url ) {
    	extraImageTwo = props.info.acf.extra_image_two.source_url;
  	}
  	if (props.info.acf.another_brand_right_image && props.info.acf.another_brand_right_image.source_url ) {
    	anotherBrandRightImage = props.info.acf.another_brand_right_image.source_url;
  	}
  	if (props.info.acf.logistics_image && props.info.acf.logistics_image.source_url ) {
    	logisticsImage = props.info.acf.logistics_image.source_url;
  	}
  	
  	if(props.info.acf.extra_text_box_testimonial){
	  	extraTextBoxTestimonial = props.info.acf.extra_text_box_testimonial;
  	}
	
	const starShapedImage = {
	  backgroundImage: `url(${starShapedImageURL})`,
	  width: `318px`,
	  height: `325px`,
	  position: `relative`,
	  backgroundPosition: `top center`,
	  backgroundRepeat: `no-repeat`,
	  backgroundSize: `contain`
  	}
	
	return (
	<div id="infographics">
		<h2>{props.info.acf.heading_info}</h2>
		
		<div className="columns" style={{paddingTop: `1rem`}}>
			<div className="column" style={{borderLeft:`1px solid #66BFF2`, height:`100%`}}>
				<div dangerouslySetInnerHTML={{ __html: props.info.acf.description_info }} />
			</div>
			<div className="column has-text-centered">
			{props.info.acf.venue__logistics_label ? (
				<p style={{fontFamily: `FFMark`, fontSize:`12px`, fontWeight: `bold`, textTransform:`uppercase`, textAlign: `left`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpcing: `0.53px`}}>{props.info.acf.venue__logistics_label}</p>
			): null }
				<div className="starShaped" style={starShapedImage}>
					<div className="numberInfo">{props.info.acf.venue_number_info}</div>
					<div className="captionInfo">{props.info.acf.image_caption_info}</div>
				</div>
			</div>
			<div className="column has-text-centered-mobile oktaStyleOnly">
				{imageTwoInfo ? (
					<img src={props.info.acf.image_two_info.source_url} alt="" />
				): null }
				
			</div>
		</div>
		
		<div className="columns oktaPosition">
			<div className="column has-text-centered-mobile">
				{imageThreePortrait ? (
					<img src={props.info.acf.image_three_portrait.source_url} alt={props.info.acf.portrait_image_heading} />
				): null}
				
				{props.info.acf.portrait_image_heading ? (
				<div>
				<h3 style={{lineHeight: `1.1`}}>{props.info.acf.portrait_image_heading}</h3>
				<hr />
				</div>
				):null }
				<p>{props.info.acf.portrait_image_small_text}</p>
				{props.info.acf.venue_or_anything_label ? (
				<p style={{fontFamily: `FFMark`, fontSize:`12px`, fontWeight: `bold`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpacing: `0.53px`, textAlign:`left`}}>{props.info.acf.venue_or_anything_label}</p>
				): null }
				<h2>{props.info.acf.venue_or_anything_number_information}</h2>
				<p style={{textTransform: `uppercase`, fontWeight:`600`, fontSize:`14px`, letterSpacing:`2.03px`, lineHeight:`1`, padding:`0`}}>{props.info.acf.venue_or_anything_number_information_small_text}</p>
				<div className="level">
					<div className="level-item" style={{fontFamily: `FFMark`, fontSize:`80px`, color: `#fff`, fontWeight:`bold`}}>{props.info.acf.info_one}</div>
					<div className="level-item mid" 
						style={{fontFamily: `FFMark`, fontSize:`25px`, fontWeight:`bold`, color: `#fff`, lineHeight:`1.15`, maxWidth:`50%`}}>{props.info.acf.info_two}
					</div>
					<div className="level-item oktaStyle">
						{threeImage ? (
						<img style={{maxWidth:`60%`}} 
							src={props.info.acf.info_three_image.source_url} 
							alt={props.info.acf.info_two} 
						/>
						): null }
					</div>
				</div>
			</div>
			<div className="column has-text-centered-mobile" id="colTwo">
				{props.info.acf.logistics_label ? (
				<p style={{fontFamily: `FFMark`, fontSize:`12px`, fontWeight: `bold`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpacing: `0.53px`, textAlign:`left`}}>{props.info.acf.logistics_label}</p>
				): null }
				<br />
				
				<div className="columns">
					{logisticsImage ? (
					<div className="column is-3">
						<img src={props.info.acf.logistics_image.source_url} alt={props.info.acf.image_title_one_info} width="auto" height="auto"/>
					</div>
					): null }
					<div className="column">
						<div className="bigText">{props.info.acf.logistics_big_text}</div>
						<div className="smallText">{props.info.acf.logistics_small_text}</div>
					</div>
				</div>
				
				<br />
				{imageThreeInfo ? (
				<img src={props.info.acf.image_three_info.source_url} alt={props.info.acf.image_title_one_info} />
				): null }
				
				{props.info.acf.image_title_one_info ? (
				<div>
				<h3 style={{lineHeight: `1.1`, paddingTop: `1em`}}>{props.info.acf.image_title_one_info}</h3>
				<hr />
				</div>
				): null }
				
				<div className="smallText" style={{textTransform:`capitalize`, letterSpacing:`0.5px`, lineHeight:`1`}}>{props.info.acf.images_three_and_four_description}</div>
				<br/ ><br />
				{props.info.acf.another_brand_label ? (
				<p style={{fontFamily: `FFMark`,fontSize:`12px`, fontWeight: `bold`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpacing: `0.53px`, textAlign:`left`}}>{props.info.acf.another_brand_label}</p>
				):null}
				<br />
				
				{props.info.acf.another_brand_big_text ? (
					<div>
						<div className="bigText">{props.info.acf.another_brand_big_text}</div><hr />
						<div id="lastSmallText" className="smallText" dangerouslySetInnerHTML={{ __html: props.info.acf.another_brand_small_text }} />
					</div>
				): null }
				
			</div>
			<div className="column has-text-centered-mobile" id="colThree">
				<div className="brandActivation" style={{position: `relative`}}>
					{props.info.acf.brand_activation_label ? (
					<p style={{fontFamily: `FFMark`,fontSize:`12px`, fontWeight: `bold`, textTransform:`uppercase`, backgroundImage:`url(${StrokeImg})`, backgroundRepeat:`no-repeat`, backgroundSize:`contain`,paddingLeft:`25px`, letterSpacing: `0.53px`, textAlign:`left`}}>{props.info.acf.brand_activation_label}</p>
					): null}
					{brandActivationImage ? (
					<img className="brandActivationImage" style={{position:`absolute`, right: `9em`, top: `0.5em`, maxWidth: `50%`, height: `50%`}} src={brandActivationImage} alt="shoe image" />
					):null }
				</div>
				
				<br />
				<div className="bigText">{props.info.acf.brand_activation_big_text}</div>
				<div className="smallText">{props.info.acf.brand_activation_small_text}</div>
				
				<br /><br />
				{imageFourInfo ? (
				<img className="thirdColImage" src={props.info.acf.image_four_info.source_url} alt={props.info.acf.image_title_one_info} style={{maxWidth:`67%`}}/>
				): null}
				
				
				{anotherBrandRightImage ? (
					<img src={anotherBrandRightImage} alt="" className="anotherBrandRightImage"/>
				): null}
				
			</div>
		</div>
		
		{extraImageOne || extraImageTwo? (
		<div className="columns bottomImages">
			<div className="column is-5">
				<img className="imgOne" src={extraImageOne} alt="" />
			</div>
			<div className="column is-5" id="oktaImgStyle">
				<img className="imgTwo" src={extraImageTwo} alt="" />
			</div>
		</div>
		): null }
		<br />
		{props.info.acf.extra_text_box_testimonial ? (
			<div className="columns is-mobile is-centered" style={{marginTop:`1rem`}}>
			  <div className="column is-half" style={{border: `1px solid #66BFF2`}}>
			    <div dangerouslySetInnerHTML={{ __html: props.info.acf.extra_text_box_testimonial }} />
			  </div>
			</div>
		): null }
		
		
	</div>	
	)
}
export default InfoGraphics