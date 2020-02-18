import styled from 'styled-components';

const CaseStudyStyle = styled.div`
	
	h2 {
		color: #FFFFFF;
		font-size: 60.6px;
		line-height: 55.2px;
	}
	p{
		color: #FFFFFF;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		padding: 0.5rem 0;
	}
	em{
		font-size: 12px;
		letter-spacing: 0.7px;
		line-height: 17px;
	}
	.client-details{
		padding-left: 50px;
	}
	h3.event-name{
		color: #FFFFFF;	
		font-size: 17.88px;	
		font-weight: 400;	
		letter-spacing: 1.2px;	
		line-height: 23px;
		text-transform: uppercase;
	}
	p.case-study-category{
		color: #96A8B3;	
		font-size: 12px;	
		font-weight: 400;	
		letter-spacing: 0.7px;	
		line-height: 20px;
		text-transform: uppercase;
		padding: 0.5rem 0 0;
	}
	
	.watch-video{
		box-sizing: border-box;
	}
	.watch-video a{
		display: inline-flex;
		align-items: center;
		border: 3px solid #fff;
		color: #fff;
		font-size: 12px;
		text-transform: uppercase;
		font-family: 'Maven Pro';
		font-weight: 700;
		letter-spacing: 0.8px;
		line-height: 24px;
		padding: 0.5rem 1rem; 
	}
	
	.has-background-yellow{
		background-color: #FFC709;
	}
	.has-background-green{
		background-color: #033B45;	
	}
	.scroller{
		color: #fff;
		font-size: 10px;
		font-weight: 400;
		letter-spacing: 2px;
		transform: rotate(-90deg);
	    position: absolute;
	    bottom: 120px;
	    left: -60px;
	}	
	.scroller-wrapper{position: relative;}
	.scroller-wrapper::after{
		content: "";
	    position: absolute;
	    left: 20px;
	    bottom: 0;
	    width: 2px;
	    height: 50px;
	    bottom: 220px;
	    background-color: #66BFF2;
	}
	.has-border-right,
	.has-border-left{
		padding: 0 0.75rem;
		line-height: 0;
	}
	.has-border-right{
		border-right: 1px solid;
	}
	.has-border-left{
		border-left: 1px solid;
		
	}
	.infographics{
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}
	
	.infographics .column > div{
		color: #FFFFFF;	
		font-size: 11px;	
		font-weight: 400;	
		letter-spacing: 1.2px;	
		line-height: 14px;
		text-transform: uppercase;
	}
	.infographics .column > em{
		color: #8F91A3;	
		font-size: 9px;	
		line-height: 13px;
	}
	.infographics-info{
		padding-top: 1rem;
	}
	
	
	.related-article{
		background-color: rgba(255,199,9,0.3);
	}
	.related-article .allcases .columns{
		border-top: 0;
		margin-top: 0;
	}
	.related-article .allcases .column{
		background-color: rgba(255,255,255,0.9);
		width: 30%;
		border-bottom: 0;
		padding: 2rem 1rem;
	}
	.related-article .allcases .column p{
		color: #96A8B3;
	}
	.related-article .allcases .column:last-child{
		border-right: 0;
	}
	.related-article .allcases .columns:last-child{
		margin-bottom: 0;
	}
	
	
	@media screen and (min-width: 769px){
		.hero.is-small .hero-body {
			padding-bottom: 4rem;
			padding-top: 4rem;
		}
	}
	
	@media screen and (max-width: 1074px){
		.scroller-section{display:none;}
	}
	@media screen and (max-width: 768px){
		.parallax,
		.noParallax{
			background-attachment: scroll!important;
		}
		.infographics{
			margin-left: -0.75rem;
			margin-right: -0.75rem;
		}
		.has-border-right,
		.has-border-left{
			border: 0;	
		}
		.hero.is-small .hero-body{
			padding-bottom: 3rem;
			padding-top: 3rem;
		}
		.related-article .allcases .column{
			width: 100%;
			border-bottom: 1px solid #DBDBDB;
		}
	}

`;

export default CaseStudyStyle