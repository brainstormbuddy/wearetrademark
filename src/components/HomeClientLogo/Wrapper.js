import styled from 'styled-components';

const LogoClient = styled.div`
	
	
	img{
		opacity: 0.5;
	}
	
	.carousel .slide{
		background: transparent;
	}
	.carousel .control-next.control-arrow{
		right: 10px;
	}
	.carousel .control-prev.control-arrow{
		left: 10px;
	}
	@media screen and (max-width: 768px){
		.carousel .slide img{
			width: auto;
		}
	}
`;

export default LogoClient