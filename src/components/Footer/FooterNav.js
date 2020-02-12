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
            {data.allWordpressPage.edges.map(page => (
              <Link
                className="navbar-item"
                to={`/${page.node.slug}`}
                key={page.node.wordpress_id}
              >{page.node.title}</Link>
            ))}
        </div>
    );
};

export default FooterNav