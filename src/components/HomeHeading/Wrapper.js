import styled from 'styled-components';

const Section = styled.section`
	padding: 5rem 1.5rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
	background-color: #e5ebf8;
	@media only screen and (max-width: 768px){
		padding:0 0.75rem 5rem;
  	}

	h1{
	  line-height: 1.3;
	  margin: 0;
	  font-size:5vw;
	}
	p{
	  font-size:1.5em;
	  line-height: 1.5;
	  margin-bottom:1.8rem;
  	}
  	.is-pulled-left{
	  	margin-right: 1.5em;
  	}
  	.is-pulled-left:last-child{
	  	margin-right: 0;
  	}
  	.button.is-large{border-radius:0;}
  	
  	@media only screen and (max-width: 844px){
	  	.button.is-large{
		  	font-size:1.25rem;
	  	}
  	}
  	
  	@media only screen and (max-width: 343px){
	  	.button.is-large{
		  	font-size:1.10rem;
	  	}
  	}
`;

export default Section;