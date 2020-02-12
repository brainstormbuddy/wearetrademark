import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}


html {box-sizing:border-box}

body{
	font-family: 'Open Sans', sans-serif;
	font-weight:400;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6{font-family: 'Maven Pro', sans-serif}
nav#header {margin-bottom:1rem;margin-top:1rem;background-color:transparent}
.navbar-item, .navbar-link{font-size:1.25rem}
.section{padding:0;}
.pagination .navbar-menu {
    display: flex;
    flex-grow: 1;
	flex-shrink: 0;
	z-index:0;
}

@media screen and (max-width: 1023px){
	.navbar-menu {
		box-shadow: rgba(35, 38, 52, 0.08) 0px 26px 50px 0px;
	}
	.navbar-menu.is-active{
		background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.4)));
		background: linear-gradient(180deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.4));
		background-color:mediumvioletred;
		position:fixed;
		width:100%;
		height:100%;
		right:0;
		top:0;
		display:grid;
		align-items:center;
	}
	.navbar-burger{z-index:10;background-color: rgba(0, 0, 0, 0.05);}
	.navbar-item, .navbar-link{
		color: #f9fafc;
		font-size:2.5em;
	}
	a.navbar-item.logo {
		color: #000;
		z-index:1;
	}
}

`;
export default GlobalStyle;