import React from 'react'

import CallIcon from './click-to-call-icon.svg'

const Callus = () => {
	return (
		<div className="call-us">
        	<article className="media" style={{alignItems: `center`}}>
			  <figure className="media-left" style={{marginRight: `0.5rem`}}>
			    <div className="image">
			      <img src={CallIcon} alt=""/>
			    </div>
			  </figure>
			  <div className="media-content">
			    <div className="content">
			        <em style={{fontFamily: `Mort Modern 09`,color:`#E0E3FF`, letterSpacing:`0.7px`,}}>- or -</em>
			        <br />
			        <h4 style={{fontFamily: `Mort Modern 09`,fontWeight:`400`, fontSize:`29px`, color:`#F2ED66`, marginBottom:`0`}}>call us</h4>
			        <h6><span style={{fontFamily:`FFMark`,fontWeight:`400`, letterSpacing:`1px`,fontSize:`13px`,color: `#F2ED66`}}>415.621.8000</span></h6>
			    </div>
			  </div>
			</article>
        </div>
	)
}

export default Callus			