import styled from 'styled-components';

const WhatMarkWillYouLeave = styled.div`
	padding: 3rem 0 0;
	
	svg {
		width: 0;
		height: 0;
		position: absolute;
	}
	
	.watch-video{
		box-sizing: border-box;
		a{
			display: inline-flex;
			align-items: center;
			border: 3px solid #0D1B23;
			color: #0D1B23;
			font-size: 12px;
			text-transform: uppercase;
			font-family: 'FFMark', sans-serif;
			font-weight: 700;
			letter-spacing: 0.8px;
			line-height: 24px;
			padding: 0.5rem 1rem; 
		}
	}
	
	.video-container video {
	  	width: 100%;
	  	display: block;
	  	clip-path: url(#clip-00);
	}

`;

export default WhatMarkWillYouLeave