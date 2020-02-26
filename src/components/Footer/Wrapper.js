import styled from 'styled-components';

import FooterFill from './Fill-1.svg'

const Footer = styled.section`	
	background-image: url(${FooterFill});
	background-color: #0D1B23;
	background-position: left center;
	background-repeat: no-repeat;
	background-size: 63%;
	
	@media screen and (max-width: 768px){
		background-size: 100%;
		background-position: 0% 20%;
	}
	@media screen and (max-width: 450px){
		background-size: 150%;
		background-position: 50% 15%;
	}
	
	

	
	
	.footer-menu a{
		color: #fff;
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 1.18px;
		line-height: 18px;
	}
	.footer-menu a:hover{
		background-color: transparent;
	}
	
	.footer-menu a.navbar-item:after{
		content: "";
		border-left: 1px solid #fff;
		position: absolute;
		height: 10px;
		right: 0px;
	}
	
	.footer-menu a.navbar-item:last-child:after{
		border-left:0;
	}
	
	p{
		font-size:12px;
		font-weight:400;
		color: #fff;
		text-align:right;
		line-height: 15px;
	}
	a{
		color:#fff;
	}
	#footer-logo{position: relative;}
	#footer-logo:after{
		content: "";
		border-right: 1px solid #000;
		position: absolute;
		right: 20px;
		height:15px;
		bottom: 22px;
	}
	.social{
		padding: 1em 0;
	}
	.social li {
		vertical-align: top;
		display: inline-block;
		margin-right: 15px;
	}
	
	@media screen and (min-width: 769px) and (max-width: 1023px){
		.footer-menu a.navbar-item:after{
			border-left: 0;
		}
	}
	
	@media screen and (max-width: 768px){
		
		.mobile{
			text-align: left;
		}
		.has-text-right{
			text-align: center!important;
		}
		.footer-menu a{
			display: inline-block;	
		}
		.footer-menu a.navbar-item:after{
			height: 15px;
		}
		#footer-logo:after{
			right:0;
		}
		
		p{
			text-align: center;
		}
	}
	@media screen and (max-width: 450px){
		.mobile{
			line-height:3!important;
		}
		#footer-logo:after{
			right:0;
			bottom: 27px;	
		}
	}
	@media screen and (max-width: 375px){
		#footerColumns{
			align-items: center!important;
		}
		.mobile{
			line-height:1.25!important;
		}
		#footer-logo:after{display:none;}
	}

`;

export default Footer;