import styled from 'styled-components';

import HomeAboutSVG from '../../img/home-about.svg'

const HomeAbout = styled.section`
	
	background: #F2ED66 url(${HomeAboutSVG});
	background-position: center center;
	background-repeat: no-repeat;
	@media screen and (min-height: 666px) and (max-height: 900px){
		background-size: 70%;	
	}

	h2{
		font-size: 60px;
		line-height: 61px;
	}
	
	p{
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		margin-bottom: 25px;
	}
	.home-about{position: relative;}
	.home-about:after{
		content: "";
		position: absolute;
		right: -35px;
		top:0;
		width: 2px;
		height: 280px;
		background-color: #fff;
	}
	
	.who-we-are{
		color: #FFFFFF;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 2px;
		line-height: 20px;
		-webkit-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
		position: absolute;
		bottom: 10px;
		right: -90px;
	}

`;

export default HomeAbout