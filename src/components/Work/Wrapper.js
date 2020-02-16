import styled from 'styled-components';

const WorkStyle = styled.section`
	
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
		background-color: #F2ED66;
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
		font-size: 59px;
		line-height: 71px;
	}
	h3{
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 1.05px;
		line-height: 20px;
		color: #141825;
		text-transform: uppercase;
		min-height: 46px;
	}

	
	p.heading {
    	padding: 0 10px 20px;
    	font-size: 29px;
    	line-height: 29px;
    	color: #141825;
    	text-transform: capitalize;
    	position: relative;
	}
	
	p.heading::after{
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
	}

`;

export default WorkStyle