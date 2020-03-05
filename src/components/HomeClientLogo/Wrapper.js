import styled from 'styled-components';

const LogoClient = styled.div`
	
	.carousel .slide{
		background: transparent;
	}
	@media screen and (max-width:768px){
		.carousel .control-next.control-arrow{
			right: 30px;
		}
		.carousel .control-prev.control-arrow{
			left: 30px;
		}
		.carousel .control-prev.control-arrow:before{
			border-right: 15px solid #fff;
		}
		.carousel .control-next.control-arrow:before{
			border-left: 15px solid #fff;
		}
		.carousel .control-arrow:before, 
		.carousel.carousel-slider .control-arrow:before{
			border-top: 15px solid transparent;
			border-bottom: 15px solid transparent;
		}
	}
`;

export default LogoClient