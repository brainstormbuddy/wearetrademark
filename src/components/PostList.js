import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import H2 from './H2'
import '../styles/postList.css'

import indexStyles from '../styles/index.module.css'

let count = 0;

export default class IndexPage extends React.Component {
  render() {
    const { posts, title} = this.props
		
    return (
      <section className="section" id="mobileSection">
        <div className="container">
          {posts.map(({ node: post }) => (
            <div className="columns postList" key={post.id}>
              <div className="column featuredImage" style={{order: count}}>
              <Link to={post.slug}>
			  {/*<Img fluid ={post.featured_media.localFile.childImageSharp.fluid}/> */}
			  <img src={post.featured_media.source_url} alt="" />
			  </Link> 
              </div>
              <div className="column" id={indexStyles.postContent}>
              <div className="postContentInner">
              <span key={count += 1}></span>
              {count == 2 ? (
                <span key={count = 0}></span>
              ): null }
              <H2>
                <Link to={post.slug} dangerouslySetInnerHTML={{ __html: post.title}}></Link>
              </H2>
              <div>              
              <div dangerouslySetInnerHTML={{ __html: post.excerpt}}/>
              <div className={indexStyles.postMeta}>
              <div className="postMetaDetails">  
              <div className="readMore is-pulled-right"> 
               <Link className="readMoreLink" to={post.slug}>
                  View Case Study →
               </Link></div></div>
               </div>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    content
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    featured_media{
	   source_url
    }
    date(formatString: "DD/MM/YYYY")
    slug
  }
`
