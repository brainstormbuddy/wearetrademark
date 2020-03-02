import styled from 'styled-components';

const CaseStudyStyle = styled.div`
	
	h2 {
		color: #FFFFFF;
		font-family: 'Mort Modern 09';
		font-weight: 500;
		font-style: normal;
		font-size:60px;
		line-height: 55.2px;
	}
	p{
		color: #FFFFFF;
		font-family: 'FFMark';
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		padding: 0.5rem 0;
	}
	em{
		font-family: 'FFMark';
		font-size: 12px;
		letter-spacing: 0.7px;
		line-height: 17px;
	}
	.client-details{
		padding-left: 50px;
	}
	h3.event-name{
		color: #FFFFFF;	
		font-family: 'FFMark';
		font-size: 17.88px;	
		font-weight: 400;	
		letter-spacing: 1.2px;	
		line-height: 23px;
		text-transform: uppercase;
	}
	p.case-study-category{
		color: #96A8B3;	
		font-family: 'FFMark';
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
		font-family: 'FFMark';
		font-size: 12px;
		text-transform: uppercase;
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
		font-family: 'FFMark';
		font-size: 10px;
		font-weight: 400;
		letter-spacing: 2px;
		transform: rotate(-90deg);
	    position: absolute;
	    bottom: 250px;
	    left: -91px;
	}	
	.scroller-wrapper{position: relative;}
	.scroller-wrapper::after{
		content: "";
	    position: absolute;
	    left: 20px;
	    width: 1px;
	    height: 100px;
	    bottom: 390px;
	    background-color: #66BFF2;
	}
	.scrollArrow{
		transform: rotate(90deg);
		position: relative;
		top: 15px;
		right: 15px;
		width: 32px;
		height: 32px;
	}
	#threeCases,
	.rel-article{
		position: relative;
	}
	.relatedTxt{
		transform: rotate(-90deg);	
		color: #0D1B23;	
		font-size: 12px;	
		font-weight: 400;	
		letter-spacing: 0.87px;	
		line-height: 24px;
		position: absolute;
		bottom: -40px;
	}
	
	#threeCases::after{
		content: "";
	    position: absolute;
	    background-color: #E0435D;
	    width: 1px;
	    height: 650px;
	    left: 25px;
	    top:-143px;
	}
	
	.caseMeta{
		padding-right: 3rem;
	}
	
	.rightSideImage{
		position:absolute;
		right:0;
		bottom: 50px;
		width: 10%;
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
		font-family: 'FFMark';
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
	
	.captionTxt{
		position: relative;
		padding-top: 2rem;
	}
	.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .slide{
		height: 100px;
		background: #fff;
	}
	.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .firstColumn{
		border-right: 1px solid #66BFF2;
	}
	
	.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .slide h6{
		color: #0D1B23;
		font-size: 21px;
		line-height: 19px;
	}
	.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .slide p{
		color: #0D1B23;
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}
	
	.related-article{
		background-color: rgba(255,199,9,0.3);
		position: relative;
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
	.related-article .allcases .column:hover .gatsby-image-wrapper{
		display: none;
	}
	.related-article .allcases .column:hover #vimeoVideo{
		transform: scale(1.1);
    	display: block;
	}
	
	
	.related-article .allcases .caseMetaParent .column {
    	background-color: transparent;
		width: 80%;
		padding: 1rem 2rem;
	}
	
	.related-article .allcases .column p,
	.related-article .allcases .column p a{
		color: #96A8B3;
	}
	.related-article .allcases .column:last-child{
		border-right: 0;
	}
	.related-article .allcases .columns:last-child{
		margin-bottom: 0;
	}
	.casestudyHeader #vimeoVideo{
		position: absolute;
		top: -1px;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.005);
	}
	
	.casestudyHeader #vimeoVideo iframe{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height: 100%;
		transform: scaleY(1.82);
	}
	
	
	.hideMe {
	  	-moz-animation: seconds 0s ease-in 5s forwards;
	    -webkit-animation: seconds 0s ease-in 5s forwards;
	    -o-animation: seconds 0s ease-in 5s forwards;
	    
	    animation: seconds 0s ease-in 5s forwards;
	    
	    -webkit-animation-fill-mode: forwards;
	    animation-fill-mode: forwards;
		position: relative;
	}
	@-webkit-keyframes seconds {
	  0% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	    left: -9999px; 
	  }
	}
	@keyframes seconds {
	  0% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	    left: -9999px; 
	  }
	}
	
	.casestudyHeader .modal-video{
		//position: absolute;
	}
	.casestudyHeader .modal-video-body{
		max-width: 100vw;
	}
	.casestudyHeader .modal-video-close-btn{
		top: 50px;
		right: 10px;
	}
	
	
	
	
	
	@media screen and (min-width: 769px){
		.hero.is-small .hero-body {
			padding-bottom: 4rem;
			padding-top: 4rem;
		}
		.hero.gallery .hero-body{
			padding-bottom:0;
			padding-top: 7rem;
		}
	}
	
	@media screen and (max-width: 1074px){
		.scroller-section{display:none;}
	}
	@media screen and (max-width: 1024px){
		.rightSideImage{
			right: 0;
			width: 10%;
		}
	}
		
	
	@media screen and (max-width: 768px){
		.watch-video{
			padding-bottom:3rem;
		}
		.client-details{
			padding: 0.75rem;
		}
		.parallax,
		.noParallax{
			background-attachment: scroll!important;
		}
		.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .slide{
			height: 100%;
		}
		.captionTxt .carousel .slider-wrapper.axis-horizontal .slider .firstColumn{
			border-right: 0
		}
		
		.infographics{
			margin-left: -0.75rem;
			margin-right: -0.75rem;
		}
		
		.hero.is-small .hero-body{
			padding-bottom: 3rem;
			padding-top: 3rem;
		}
		.related-article .allcases .column{
			width: 100%;
			border-bottom: 1px solid #DBDBDB;
		}
		.starShaped{
			margin: 0 auto 5rem;
		}
		#infographics .captionInfo{
			top: 100%;
		}
		.brandActivationImage{
			position: relative!important;
			right:0!important;
			top:0!important;
			max-width: 100%!important;
			height: 100%!important;
		}
		#infographics .level .level-item.mid{
			max-width: 100%!important;
			font-size:35px!important;
		}
		.rightSideImage{display:none!important;}
		.thirdColImage{
			max-width:100%!important;
		}
		
		.related-article .allcases.threeCasesMobile .column{
			border-bottom:0;	
		}
		#threeCases::after{
			display:none;
		}
		.relatedTxt{
			font-size:10px;
		}
		.related-article .allcases.threeCasesMobile .column{
			background-color: #fff;
		}
		.related-article .allcases.threeCasesMobile .column{
			width:auto;
		}
		.related-article .allcases.threeCasesMobile .caseMetaParent .column{
			width: 100%;
		}
		.rel-article .hero-body{
			padding: 5rem 1.5rem;
		}
		.carousel .slide{
			background: transparent;
		}
		.rel-article .carousel .control-dots .dot{
			background: green;
		}
		.allcases.threeCasesMobile .circle-casestudy-parent{
			position: relative;
			right:0;
			top:0;
		}
		.allcases.threeCasesMobile h3{
			min-height: 100%;
		}
	}

`;

export default CaseStudyStyle