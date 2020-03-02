import styled from 'styled-components';

import HomeAboutSVG from '../../img/home-about.svg'

const HomeAbout = styled.section`
	
	background: #F2ED66 url(${HomeAboutSVG});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: auto;
	@media screen and (max-width: 767px){
		background-position: 15% 100%;
	}
	@media screen and (min-height: 666px) and (max-height: 900px){
		height: 100vh;
	}

	h2{
		font-family: 'Mort Modern 09';
		font-size: 60px;
		line-height: 41px;
		font-weight: 500;
	}
	
	p{
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		margin-bottom: 25px;
	}
	.home-about{position: relative;}
	.home-about::after{
		content: "";
		position: absolute;
		right: -35px;
		top:0;
		width: 2px;
		height: 250px;
		background-color: #fff;
	}
	
	.who-we-are{
		color: #FFFFFF;
		font-family: 'FFMark';
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 2px;
		line-height: 20px;
		-webkit-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
		position: absolute;
		bottom: 80px;
		right: -90px;
	}
	@media screen and (max-width: 1023px){
		h2{
			font-size: 40px;
		}
		
		.home-about::after{
			height: 0;
		}
		.who-we-are{
			display: none;	
		}
	}

`;

export default HomeAbout