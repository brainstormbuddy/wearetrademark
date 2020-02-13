import styled from 'styled-components';

import FooterFill from './Fill-1.svg'

const Footer = styled.section`	
	background-image: url(${FooterFill});
	background-color: #0D1B23;
	background-position: left center;
	background-repeat: no-repeat;
	
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
`;

export default Footer;