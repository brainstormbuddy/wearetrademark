import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import { Slide } from 'react-slideshow-image'

import slack from './img/slack/art-bg.svg'
import adobe from './img/MaskAdobe.svg'
import charity from './img/MaskCharity.svg'

import XIcon from './img/Path.svg'
import FullscreenIcon from './img/fullscreen.svg'

import CasestudyStyle from './Wrapper'


class Slideshow extends React.Component {
    
    constructor () {
	    super()
	    this.state = {
	      isOpen: false
	    }
	    this.openModal = this.openModal.bind(this)
	}

	openModal () {
	  this.setState({isOpen: true})
	}
    
    
    
    
    render () {
	    
	    let slideImages = [slack, adobe, charity];

		let properties = {
		  autoplay: false,
		  duration: 5000,
		  transitionDuration: 500,
		  infinite: true,
		  indicators: false,
		  arrows: true,
		  onChange: (oldIndex, newIndex) => {
		    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
		  }
		}
	    
    return (
      <CasestudyStyle>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide" style={{backgroundImage: `url(${slideImages[0]})`, backgroundColor: `#FF4274`}}>
            <div className="container">
            <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='128729855' onClose={() => this.setState({isOpen: false})} />
          	  <div className="columns">
				  <div className="column is-half is-offset-one-quarter x-icon" style={{position: `relative`}}>
				  		<img src={XIcon} alt="x icon" />
				  		
				  		<div className="case-meta">
				  			<a onClick={this.openModal} className="play-video">Play video <img src={FullscreenIcon} alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `10px`}}/></a><br />
				  			<a href="#">Case study</a>
				  		</div>
				  		
				  		
	              		<h2 className="title has-text-white">Slack</h2>
	              		<h3 className="subtitle has-text-white">Slack Frontiers Conference 2019</h3>
	              		<p>With over 10 million active users in over 150 countries, Slack is changing how the world works on a global scale. After producing their inaugural Frontiers conference in 2017, Slack asked us to join forces again. Our challenge? To create an inspiring experience that would bring together and celebrate the unique and varied worlds Slack connects on a daily basis.</p>
	              		<div className="xicon-txt">whatmarkwillyouleave</div>
	              </div>
	            </div>				  
            </div> 
          </div>
          
          
          <div className="each-slide" style={{backgroundImage: `url(${slideImages[1]})`, backgroundColor: `rgba(149,168,76,0.58)`}}>
            <div className="container">
          	  <div className="columns">
				  <div className="column is-half is-offset-one-quarter x-icon" style={{position: `relative`}}>
				  		<img src={XIcon} alt="x icon" />
				  		<div className="case-meta">
				  			<a className="play-video" href="#">Play video <img src={FullscreenIcon} 
				alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `10px`}}/></a><br />
				  			<a href="#">Case study</a>
				  		</div>
	              		<h2 className="title has-text-white">Adobe</h2>
	              		<h3 className="subtitle has-text-white">Adobe Max Executive Reception</h3>
	              		<p>How do you inspire some of the world’s most inspirational creative VIPs? That was our challenge for The Adobe Max Executive Reception–an invite-only event for the world’s most cutting edge and innovative leaders, designers and Chief Creative Officers. With color as our inspiration, we delivered FILTER–a full sensory experience that embraced the concept of how filters alter and enhance our perception of the world around us and celebrated the wide and creative influence of this exclusive group.</p>
	              		<div className="xicon-txt">whatmarkwillyouleave</div>
	              </div>
	            </div>				  
            </div>
          </div>
          
          <div className="each-slide" style={{backgroundImage: `url(${slideImages[2]})`, backgroundColor: `#66BFF2`}}>
            <div className="container">
          	  <div className="columns">
				  <div className="column is-half is-offset-one-quarter x-icon" style={{position: `relative`}}>
				  		<img src={XIcon} alt="x icon" />
				  		<div className="case-meta">
				  			<a className="play-video" href="#">Play video <img src={FullscreenIcon} 
				alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `10px`}}/></a><br />
				  			<a href="#">Case study</a>
				  		</div>
	              		<h2 className="title has-text-white">charity: water</h2>
	              		<h3 className="subtitle has-text-white">charity: ball</h3>
	              		<p>One in ten people lack access to clean water. charity: water is on a mission to change that. And when CEO Scott Harrison decided to bring their charity: ball to the Bay area–home turf for their biggest donors–we were on a mission to help. See how our unique immersive, 360° experience helped bring clean water to Ethiopian communities and raised close to $7 in one night.</p>
	              		<div className="xicon-txt">whatmarkwillyouleave</div>
	              </div>
	            </div>				  
            </div>
          </div>
        </Slide>
        <div className="has-text-centered xx">Some of our clients</div>
      </div>
      </CasestudyStyle>
    )
    
    }
}

export default Slideshow