import React , { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin-icon.svg'
import instagram from '../img/instagram-icon.svg'
import home from '../img/link-icon.svg'
import logo from '../img/logo.svg'
import userConfig from '../../config'

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const {target} = el.dataset;
          const $target = document.getElementById(target);

          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`  
        {
            allWordpressCategory { 
              edges {
                node {
                  name
                  wordpress_id
                  slug
                }
              }
            }
          }
        `}
        render={data => {
          const wordpressCategory = data.allWordpressCategory.edges;
          return (
            <nav className="navbar is-transparent" id="header">
              <div className="container">
                <div className="navbar-brand">
                  	<Link to="/" className="navbar-item">
                    <figure className="image">
                      <img src={logo} alt="Zakir Sajib" style={{ width: "88px" }} />
                    </figure>                    
                   </Link>
                  <div className="navbar-burger burger" data-target="navMenu">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div id="navMenu" className="navbar-menu">
                  <div className="navbar-start has-text-centered">
                    {wordpressCategory.map(categories => (
                      <Link
                        className="navbar-item"
                        to={`categories/${categories.node.slug}`}
                        key={categories.node.wordpress_id}
                      >
                        {categories.node.name}
                      </Link>
                    ))}
                  </div>
                  <div className="navbar-end social-icons">
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
              </div>
            </nav>
          );
        }}
      />
    );
  }
}

export default Navbar;