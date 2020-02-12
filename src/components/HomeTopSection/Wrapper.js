import styled from 'styled-components';

const WhatMarkWillYouLeave = styled.div`
	max-width:1003px;
	margin: 0 auto;
	
	svg {
		width: 0;
		height: 0;
		position: absolute;
	}
	.video-container{
	  	margin: 40px auto 0;
	}
	.watch-video {
	  	margin: 0 auto;
	}
	
	.watch-video{
		box-sizing: border-box;
	}
	
	.watch-video a{
		display: inline-flex;
		align-items: center;
		border: 3px solid #0D1B23;
		color: #0D1B23;
		font-size: 12px;
		text-transform: uppercase;
		font-family: 'Maven Pro';
		font-weight: 700;
		letter-spacing: 0.8px;
		line-height: 24px;
		padding: 0.5rem 1rem; 
	}
	
	.video-container video {
	  	width: 100%;
	  	display: block;
	  	clip-path: url(#clip-00);
	}

`;

export default WhatMarkWillYouLeave