import styled from 'styled-components';
import Reel from './reel-bg@2x.png';

const WorkStyle = styled.section`
	@media screen and (max-width: 1023px){
		margin-left:0!important;
		background-color:transparent!important;
		cursor: auto!important;	
	}
	.is-200{
		max-width: 200px;
		margin: auto;
		height: 200px;
	}
	
	
	.allcases .filterDiv img{
		opacity: 0;
		transform: translate3d(0,0,0);
	}
	
	.allcases .filterDiv:first-child img {
		transition-delay: .5s;
		opacity: 1;
	}
	.allcases .filterDiv:nth-child(2) img {
		transition-delay: .6s;
		opacity: 1;
	}
	.allcases .filterDiv:nth-child(3) img {
		transition-delay: .7s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(4) img {
		transition-delay: .8s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(5) img {
		transition-delay: .9s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(6) img {
		transition-delay: .10s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(7) img {
		transition-delay: .11s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(8) img {
		transition-delay: .12s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(9) img {
		transition-delay: .13s;opacity: 1;
	}
	.allcases .filterDiv:nth-child(10) img {
		transition-delay: .14s;opacity: 1;
	}
	.is-200:hover img,
	.filterDiv:hover img {
		//transition: all .2s ease-in-out;
    	//transform: scale(1.1);
    	display: none;
	}	
	.filterDiv:hover #vimeoVideo {
		transform: scale(1.1);
    	display: block;	
    }
	#vimeoVideo {
		width: 200px;
		height: 200px;
		border-radius: 290486px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		transition: all .2s ease-in-out;
	}
	#vimeoVideo iframe{
		width: 100%;
		height: 100%;
		position: absolute;
		top:0;
		left:0;
		transition: all .2s ease-in-out;
		transform: scale(1.8);	
	}
	
	.caseMeta{
		padding-right: 3rem;
	}
	
	.watch-video{
		box-sizing: border-box;
	}	
	.filter-box a,
	.watch-video a{
		display: inline-flex;
		align-items: center;
		border: 3px solid #0D1B23;
		color: #0D1B23;
		font-size: 12px;
		text-transform: uppercase;
		font-family: 'Maven Pro';
		font-weight: 700;
		letter-spacing: 0.8px;
		line-height: 24px;
		padding: 0.5rem 1rem; 
	}
	.latest-reel{
		background: #FAF8C0 url(${Reel});
		background-repeat: no-repeat;
		background-position: 0% 50%;
	}

	.hrline{
		background: #66BFF2;
		height: 1px;
	    position: absolute;
	    left: -16px;
	    bottom: 10px;
	    width: 100%;
	}
	.allhrline{
		background: #66BFF2;
		height: 1px;
	    position: absolute;
	    left: 0;
	    bottom: 30px;
	    width: 100%;
	}
	
	
	.allcases .columns{
		border-top: 1px solid #DBDBDB;
	}
	.allcases .column{
		border-right: 1px solid #DBDBDB;
		padding: 1rem;
		position: relative;
		border-bottom: 1px solid #DBDBDB;
	}
	.allcases .column:nth-child(4){
		border-right: 0;
	}
	.allcases .columns:last-child{
		//border-bottom: 1px solid #DBDBDB;
		margin-bottom: 5rem;
	}
	.allcases .column:hover{
		background-color:#f1ed67;
	}
	
	.allcases .titleHeading .columns:last-child{
		margin-bottom:0;
	}
	.allcases .titleHeading .columns{
		border-top:0;
	}
	.allcases .titleHeading .columns .column{
		border-right:0;
		border-bottom:0;
		padding: 0.75rem;
		background: none;
	}
	cite {
		color: #8F91A3;
		font-size: 12px;
		font-style: italic;
		letter-spacing: 0.7px;
		line-height: 17px;
	}
	
	h2{
		color: #141825;
		font-size: 50px;
		line-height: 40px;
		font-weight: 700;
	}
	h3{
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 1.05px;
		line-height: 20px;
		color: #141825;
		text-transform: uppercase;
		min-height: 36px;
	}

	
	p.heading {
    	padding: 0 10px 20px;
    	font-size: 25px;
    	line-height: 29px;
    	color: #141825;
    	text-transform: capitalize;
    	position: relative;
	}
/*
	
	p.heading::before{
		content: "";
		background: #66BFF2;
	    height: 1px;
	    position: absolute;
	    left: 0;
	    top: 60%;
	    width: 33%;
	}
*/
	
	p{
		color: #96A8B3;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.7px;
		line-height: 16px;
	}
	em{
		font-size: 12px;
		letter-spacing: 0.7px;
		line-height: 17px;
	}
	
	.indexCaseStudies{
		transition: all .8s ease-out;
	}
	.sidebar-opened{
		background-color: rgba(0,0,0,0.2);
	}
	.allcases .caseMeta{
		padding: 0 2rem 1rem;
	}
	
	.allcases .caseMeta,
	.allcases .circle-casestudy-parent{
		border-right: 0;
		border-bottom: 0;
	}
	.allcases .columns.caseMetaParent{
		border-top:0;
		padding-top: 1.5rem;
	}
	.allcases .columns.caseMetaParent:last-child{
		margin-bottom:0;
	}
	
	#vimeoVideo{display:none;}
	
	@media screen and (max-width: 768px){
		.image{
			max-width: 50%;
			margin: 0 auto;
		}
		.allcases .columns{
			border: 0;
		}
		.allcases .column{
			border-right: 0;
			border-bottom: 1px solid #DBDBDB;
		}
		.allcases .column.caseMeta,
		.allcases .circle-casestudy-parent{
			border-top:0;
			border-bottom:0;
		}
		.allcases .columns.caseMetaParent{
			position: relative;	
		}
		.allcases .circle-casestudy-parent{
			position: absolute;
			right:20px;
			top: 50%;	
		}
		.hrline,
		.allhrline{
			display: none;	
		}
	}

`;

export default WorkStyle