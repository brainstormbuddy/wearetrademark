import styled from 'styled-components';

import Fill1 from './img/Fill-1.svg'

const PrivacyStyle = styled.div`
	
	background: url(${Fill1});
	background-position: 50% 0;
	background-repeat: no-repeat;
	background-size: auto;

	
	.column.col-left{
		border-right: 1px solid #4E6F7B;
	}
	
	h2{
		font-size: 60.6px;
		padding-bottom: 10px;
	}
	h3{
		font-size: 28px;
		line-height: 32px;
		padding-bottom: 20px;
		padding-top: 20px;
		border-top: 1px solid #4E6F7B;
	}
	p{	
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		padding-bottom: 20px;
	}
	
	@media screen and (max-width: 768px){
		.column.col-left{
			border-right: 0;
		}
		h2{
			font-size: 50.6px;
		}
	}

`;

export default PrivacyStyle