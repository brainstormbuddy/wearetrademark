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
	.reelTxt,
	.reelTxtSidebar{
		position: relative;
		left: -1rem;
	}
	
	.reelTxtSidebar{
		left: 1rem;
	}
	
	.reelTxt::before{
		content: "";
	    border-left: 90px solid #66BFF2;
	    height: 1px;
	    position: absolute;
	    left: 0;
	    bottom: 20px;
	}
	.reelTxtSidebar::before{
		content: "";
		border-left: 90px solid #66BFF2;
		height: 1px;
	    position: absolute;
	    left: -2rem;
	    bottom: 20px;
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
	
	cite {
		color: #8F91A3;
		font-size: 12px;
		font-style: italic;
		letter-spacing: 0.7px;
		line-height: 17px;
	}
	
	h2{
		color: #141825;
		font-size: 45px;
		line-height: 71px;
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
	
	p.heading::before{
		content: "";
		border-left: 80px solid #66BFF2;
	    height: 1px;
	    position: absolute;
	    right: 0;
	    left: 0;
	    top: 60%;
	}
	
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
		padding: 1rem 2rem 1rem;
	}
	
	.allcases .caseMeta,
	.allcases .circle-casestudy-parent{
		border-right: 0;
		border-bottom: 0;
	}
	.allcases .columns.caseMetaParent{
		border-top:0;
	}
	.allcases .columns.caseMetaParent:last-child{
		margin-bottom:0;
	}
	
	
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
	}

`;

export default WorkStyle