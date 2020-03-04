import styled from 'styled-components';

const CasestudyStyle = styled.div`

	.caseStudyDetails {
    	min-height: 250px;
	}
	svg {
		width: 0;
		height: 0;
		position: absolute;
	}
	.video-container{
	  	margin: 0 auto;
	  	width: 100%;
	  	transform: scale(2);
	  	position: relative;
	  	top:-100px;
	  	left:5px;
	  	max-width: 537px;
	  	max-height: 300px;
	}
	.video-container video {
	  	width: 100%;
	  	display: block;
	  	clip-path: url(#clip-01);
	}

.each-slide{
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
 	min-height: 100vh;
	margin: auto;
}

h2.title{
	font-size: 40px;
	line-height: 42px;
	font-family: 'Mort Modern 03 Large';
	font-weight: 500;
	font-style: normal;
}
h3.subtitle{
	font-family: 'FFMarkW1GMedium';
	font-size: 14px;
	letter-spacing: 2px;
	line-height: 16px;
	text-transform: uppercase;
}
p{
	font-size: 14px;
	line-height: 20px;
	color: #FFFFFF;
}

.react-slideshow-container{
	position: relative;
}

.react-slideshow-container .nav{
	width: 0;
	border-radius:0;
	display:block;
	z-index: 2;
}

.react-slideshow-container .nav,
.react-slideshow-container .nav:hover{
	background: none;
}

.react-slideshow-container .nav span{
	border-color: #fff;
}
.react-slideshow-container .nav:first-of-type,
.react-slideshow-container .nav:last-of-type{
	position: absolute;
}

.react-slideshow-container .nav:first-of-type{
	right: 54%;
    bottom: 50vh;
    margin-right:0;
}
.react-slideshow-container .nav:last-of-type{
	left: 53%;
    bottom: 50vh;
    margin-left: 0;
}
.react-slideshow-container .nav:first-of-type span{
	margin-left:0;
}
.react-slideshow-container .nav:last-of-type span{
	margin-right:0;
}

.x-icon-txt{
	color: #fff;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 2px;
	line-height: 20px;
	transform: rotate(90deg);
    position: absolute;
    bottom: 0;
    right: -119px;
}

.vertical-line{
    position: absolute;
    right: -35px;
    top: 0;
    width: 1px;
    height: 60%;
    background-color: #fff;
}
.case-meta{
	position: absolute;
	top: 50%;
	bottom: 50%;
	height: 0;
	right: 0;
	line-height:1;
	margin: -4rem 0;
}

.case-meta a{
	color: #FFC709;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.8px;
	line-height: 24px;
	text-transform: uppercase;
}
.slide-container {
    position: relative;
}
.xx {
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
	color: rgba(255,255,255,0.8);
	letter-spacing: 2.8px;
	text-transform: uppercase;
	font-size: 12.6px;
	font-weight: 400;
	line-height: 20px;
	z-index: 1;
}
.xx::after,
.xx::before{
	content: "";
}
.xx::before{
	border-left: calc(100vw - 60vw) solid rgba(255,255,255,0.5);
    position: absolute;
    top: 40%;
    height: 2px;
    left: 0;
}
.xx::after{
	border-right: calc(100vw - 60vw) solid rgba(255,255,255,0.5);
    position: absolute;
    top: 40%;
    height: 2px;
    right: 0;
}
.modal-video{
	position: absolute;
	background-color: transparent;
	outline: 0;
}

.xImage{
		max-width: 50%;
		margin: 0 auto;
		display: table;
	}

@media screen and (max-width: 1230px){
	.xx::after{
		border-right: calc(100vw - 70vw) solid rgba(255,255,255,0.5);
	}
	.xx::before{
		border-left: calc(100vw - 70vw) solid rgba(255,255,255,0.5);
	}
}

@media screen and (max-width: 768px){
	
	h2.title{
		font-size: 40px;
	}
	h3.subtitle{
		font-size: 16px;
	}
}
@media screen and (max-width: 700px){
	.react-slideshow-container .nav:first-of-type,
	.react-slideshow-container .nav:last-of-type{
		bottom: 57vh;
	}
}
@media screen and (max-width: 655px){
	.xx::after{
		border-right: calc(100vw - 80vw) solid rgba(255,255,255,0.5);
	}
	.xx::before{
		border-left: calc(100vw - 80vw) solid rgba(255,255,255,0.5);
	}
	.x-icon-txt,
	.vertical-line{
		display: none;
		height:0;
	}
	.case-meta{
		margin: -5rem 0;
		right: -70px;	
	}
}
@media screen and (max-width: 500px){
	.react-slideshow-container .nav:first-of-type,
	.react-slideshow-container .nav:last-of-type{
		bottom: 65vh;
	}
}

@media screen and (max-width: 375px){
	.video-container{
		top:-50px;
	}
	.case-meta{
		margin: -3rem 0;
		right: -50px;
	}
	.case-meta a{
		font-size: 10px;
		line-height: 20px;
	}
}
@media screen and (max-width: 320px) and (max-height:568px){
	.react-slideshow-container .nav:first-of-type,
	.react-slideshow-container .nav:last-of-type{
		bottom:90vh;
	}	
}

@media screen and (max-width: 320px) and (max-height:480px){
	.react-slideshow-container .nav:first-of-type,
	.react-slideshow-container .nav:last-of-type{
		bottom: 100vh;
	}	
}




`;

export default CasestudyStyle