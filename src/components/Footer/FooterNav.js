import React , { Component } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const FooterNav = () => {
	
	const data = useStaticQuery(graphql`
		query MyQuery {
			allWordpressPage { 
	          edges {
	            node {
	              title
	              wordpress_id
	              slug
	            }
	          }
	        }
	    }
	`)
  	return (
      	<div className="navbar-end has-text-right footer-menu">
          <Link
            className="navbar-item"
            to="work"
          >
            Work
          </Link>
          {/*
          <Link
            className="navbar-item"
            to="about"
          >
            About
          </Link>
          */}
          
          <Link
            className="navbar-item"
            to="contact"
          >
            Contact
          </Link>
          
          {/*
          <Link
            className="navbar-item"
            to="blog"
          >
            Blog
          </Link>
          */}
        </div>
    );
};

export default FooterNav