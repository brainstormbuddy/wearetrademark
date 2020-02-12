import styled from 'styled-components';

import FooterFill from './Fill-1.svg'

const Footer = styled.section`	
	background-image: url(${FooterFill});
	background-color: #0D1B23;
	background-position: left center;
	background-repeat: no-repeat;
	
	.footer-menu a{
		color: #fff;
	}
	.footer-menu a:hover{
		background-color: transparent;
	}
	
	p{
		font-size:14px;
		color:#fff;
		text-align:right;
	}
	a{
		color:#fff;
	}
	#footer-logo{position: relative;}
	#footer-logo:after{
		content: "";
		border-right: 1px solid #000;
		position: absolute;
		right: 15px;
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