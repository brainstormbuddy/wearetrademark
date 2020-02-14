import styled from 'styled-components';

const ContactForm = styled.div`
	
	input,
	textarea{
		background-color: transparent;
		box-shadow: none;
		border-radius:0;
		border:0;
		border-bottom: 1px solid #4E6F7B;
		color: #95CCC3;
		height: 3.25em;
		font-size: 20.2px;
		font-weight: 400;
		letter-spacing: -0.02px;
	}
	input:focus,
	textarea:focus{
		box-shadow: none;
	}
	textarea{
		box-sizing: border-box;
		border: 1px solid #66BFF2;
		background-color: #09141A;
		box-shadow: inset 0 2px 5px 0 rgba(0,0,0,0.2);
		height: 173px;
	}
	input::placeholder{
		color: #95CCC3;
	}
	textarea::placeholder{
		color: #F2ED66;
	}
	.button.contact-btn,
	.button.upload-btn{
		background-color: transparent;
		border: 3px solid #fff;
		border-radius: 0;
		color: #fff;
		padding: 0 3em;
		text-transform: uppercase;
		font-weight:700;
		letter-spacing:1px;
	}
	.button.upload-btn{
		border: 2px solid #fff;
		padding: 0 3em;
		font-size: 0.7em;
	}

	.button.contact-btn:before,
	.button.upload-btn:before{
		content:"";
		border-left: 20px solid #fff;
		position: absolute;
		left: 0;
		height: 2px;
	}
	
	.button.contact-btn:after,
	.button.upload-btn:after{
		content: "";
		border-right: 20px solid #fff;
		position: absolute;
		right: 0;
		height: 2px;
	}
	.button.upload-btn:before,
	.button.upload-btn:after{
		height: 1px;
	}
	
	.call-us{
		position: absolute;
		right: 0;
		top:0;
	}
	.call-us figure:before{
		content: "";
		position: absolute;
		border-left: 100px solid #F2ED66;
		left:-115px;
		bottom: 50%;
		height: 1px;
	}
	.dropzone {
	    flex: 1;
	    display: grid;
	    flex-direction: column;
	    align-items: center;
	    padding: 0 20px 20px;
	    border-width: 2px;
	    border-color: #66BFF2;
	    border-style: dashed;
	    background-color: #09141A;
	    box-shadow: inset 0 2px 5px 0 rgba(0,0,0,0.2);
	    box-sizing: border-box;
	    color: #bdbdbd;
	    outline: none;
	    transition: border .24s ease-in-out;
	    min-height: 173px;
	}
	
	p{
		font-size:14px;
		color:#F2ED66;
		text-align:center;
		letter-spacing: -0.01px;
		line-height: 18px;
		margin-bottom:10px;
	}
	@media screen and (max-width: 1024px){
		.call-us{
			display: none;
		}	
	}
	
`;

export default ContactForm