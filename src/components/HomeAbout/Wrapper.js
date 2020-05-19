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

	
	.home-about{
		position: relative;
		
		h2{
			font-size: 60px;
			line-height: 41px;
			font-weight: 500;
			margin-bottom: 1.5rem;
			@media screen and (max-width: 1023px){
				font-size: 40px;
			}
		}
		
		p{
			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
			margin-bottom: 25px;
		}
		
		&::after{
			content: "";
			position: absolute;
			right: 0;
			top:0;
			width: 2px;
			height: 50%;
			background-color: #fff;
		}
		
		.who-we-are{
			color: #FFFFFF;
			font-family: 'FFMark', sans-serif;
			font-size: 16px;
			font-weight: 400;
			letter-spacing: 2px;
			line-height: 20px;
			-webkit-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
			position: absolute;
			bottom: 80px;
			right: -55px;
			@media screen and (max-width: 1023px){
				display: none;
			}
		}
	}
`;

export default HomeAbout