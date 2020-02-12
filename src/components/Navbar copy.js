import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin-icon.svg'
import instagram from '../img/instagram-icon.svg'
import home from '../img/link-icon.svg'
import logo from '../img/logo.svg'
import userConfig from '../../config'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={
	 data => (
      <nav className="navbar is-transparent" id="header">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Zakir Sajib" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
	          <div className="navbar-start">
	            {data.allWordpressPage.edges.map(edge => (
	              <Link
	                className="navbar-item"
	                to={edge.node.slug}
	                key={edge.node.slug}
	              >
	                {edge.node.title}
	              </Link>
	            ))}
	          </div>
	          <div className="navbar-end">
	            <a
	              className="navbar-item"
	              href={userConfig.social.website}
	              target="_blank"
	              rel="noopener noreferrer"
	            >
	              <span className="icon">
	                <img src={home} alt="Zakir Sajib" />
	              </span>
	            </a>
	            <a
	              className="navbar-item"
	              href={userConfig.social.github}
	              target="_blank"
	              rel="noopener noreferrer"
	            >
	              <span className="icon">
	                <img src={github} alt="Github" />
	              </span>
	            </a>
	            <a
	              className="navbar-item"
	              href={userConfig.social.linkedin}
	              target="_blank"
	              rel="noopener noreferrer"
	            >
	              <span className="icon">
	                <img src={linkedin} alt="LinkedIn" />
	              </span>
	            </a>
	            <a
	              className="navbar-item"
	              href={userConfig.social.instagram}
	              target="_blank"
	              rel="noopener noreferrer"
	            >
	              <span className="icon">
	                <img src={instagram} alt="Instagram" />
	              </span>
	            </a>
	          </div>
          </div>
      </nav>
    )}
  />
)

export default Navbar
