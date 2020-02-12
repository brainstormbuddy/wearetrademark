import React , { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import LogoBlack from '../img/logoBlack.svg'
import LogoYellow from '../img/LogoYellow.svg'

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
        `}
        render={data => {
          const wordpressPages = data.allWordpressPage.edges;
          return (
            <nav className="is-transparent has-text-centered">
                <div className="container">
	                <div className="navbar-brand level-item has-text-centered">
	                  <Link to="/" className="logo"><img src={LogoYellow} alt="X Trademark logo" /></Link>
	                  <div className="navbar-burger burger" data-target="navMenu">
	                    <span />
	                    <span />
	                    <span />
	                  </div>
	                </div>
	                <div id="navMenu" className="level-item">
	                  <div className="level-item has-text-centered">
	                    {wordpressPages.map(page => (
	                      <Link
	                        className="navbar-item"
	                        to={`/${page.node.slug}`}
	                        key={page.node.wordpress_id}
	                      >
	                        {page.node.title}
	                      </Link>
	                    ))}
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