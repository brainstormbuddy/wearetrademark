import styled from 'styled-components';

const CasestudyStyle = styled.div`

	svg {
		width: 0;
		height: 0;
		position: absolute;
	}
	.video-container{
	  	margin: 40px auto 0;
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
	font-size: 60px;
	line-height: 72px;
}
h3.subtitle{
	font-size: 24px;
	font-weight: 600;
	letter-spacing: 2px;
	line-height: 30px;
	text-transform: uppercase;
}
p{
	font-size: 14px;
	line-height: 18px;
	color: #FFFFFF;
}

.react-slideshow-container{
	position: relative;
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
	right: calc(100vw - 48vw);
    bottom: 41%;
}
.react-slideshow-container .nav:last-of-type{
	left: calc(100vw - 48vw);
    bottom: 41%;
}

.xicon-txt{
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 2px;
	line-height: 20px;
	transform: rotate(90deg);
    position: absolute;
    bottom: 350px;
    right: -142px;
}

.x-icon:after{
	content: "";
    position: absolute;
    right: -35px;
    top: 0;
    width: 2px;
    height: 280px;
    background-color: #fff;
}
.case-meta{
	position: absolute;
	top: 34%;
	right: 0;
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
	font-size: 15.6px;
	font-weight: 400;
	line-height: 20px;
	z-index: 1;
}
.xx:after,
.xx:before{
	content: "";
}
.xx:before{
	border-left: calc(100vw - 60vw) solid rgba(255,255,255,0.5);
    position: absolute;
    top: 40%;
    height: 2px;
    left: 0;
}
.xx:after{
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

@media screen and (min-width: 1408px){
	.react-slideshow-container .nav:last-of-type{
		left: calc(100vw - 50vw);
	}
	.react-slideshow-container .nav:first-of-type{
		right: calc(100vw - 45vw);
	}
}

`;

export default CasestudyStyle