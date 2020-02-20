import React from 'react'
//import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import ProjectContactForm from '../components/ProjectContact'
import userConfig from '../../config'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PocketIcon,
  EmailIcon
} from 'react-share'
import postStyles from '../styles/post.module.css'
import ShareWrapper from '../components/Share'

    let url
    if (typeof window !== `undefined`) {
      url = window.location.href;
      require("smooth-scroll")('a[href*="#"]')
    }
    


  export default props => {
    const post = props.data.wordpressPost;
    const { previous, next } = props.pageContext;

  return (
    <Layout>
      <Helmet title={`${post.title} | ${userConfig.title}`}>
        <meta name="description" content={`${post.excerpt}`}/>
        <body className="single-case-study" />
      </Helmet>
      	<div className={postStyles.postImg}>
      	{/*<Img fluid={post.featured_media.localFile.childImageSharp.fluid} alt={post.title} /> */}
      	<img src={post.featured_media.source_url} alt="" />
      	</div>
        <section className="section">
        <div className={postStyles.entryHeader}>
        	<h1 className="title is-size-2 has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: post.title}}/>
       </div> 
      <div className="container content">
        <div className="columns">
          <div className="column is-12">               
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div style={{ marginTop: `4rem` }}>
				<p style={{color: `#272822`}}><b>Last updated on:</b>{' '}{post.modified}</p>
            </div>
             <ShareWrapper>
              {userConfig.showShareButtons && (
               <div className="Demo__some-network">
                <FacebookShareButton url={url} quote={post.title}
                className="Demo__some-network__share-button">
                <FacebookIcon size={32} round={false} />
                </FacebookShareButton>
                </div>
              )}
             {userConfig.showShareButtons && (
             <div className="Demo__some-network">
	             <TwitterShareButton url={url} title={post.title}
	                className="Demo__some-network__share-button">
	                <TwitterIcon size={32} round={false} />
	              </TwitterShareButton>
              </div>
						  )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
	              <LinkedinShareButton
	                url={url}
	                windowWidth={750}
	                windowHeight={600}
	                className="Demo__some-network__share-button">
	                <LinkedinIcon size={32} round={false} />
	              </LinkedinShareButton>
              </div>
              )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
	              <PocketShareButton
	                url={url}
	                subject={post.title}
	                className="Demo__some-network__share-button">
	                <PocketIcon size={32} round={false} />
	              </PocketShareButton>
              </div>
              )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
	              <EmailShareButton
	                url={url}
	                subject={post.title}
	                body="body"
	                className="Demo__some-network__share-button">
	                <EmailIcon size={32} round={false} />
	              </EmailShareButton>
              </div>
              )}
              </ShareWrapper>
              
              <div className="container likeWhatYouSee" style={{paddingTop: `50px`, paddingBottom: `50px`}}>
	        	<div className="columns">
	        		<div className="column">
						<h2 className="post-title title is-1 has-text-black has-text-weight-normal">Like what you see?</h2>
						<p>We do outstanding work with WordPress, and<br />we’re outstanding to work with.&nbsp;👋</p>
						<p>We’d love to understand what your enterprise needs are, <br />and how we can help you reach your goals. →</p>
					</div>
	        		<div className="column">
						<ProjectContactForm />
					</div>
				</div>
			  </div>
              
              
              <div className="pagination is-centered" role="navigation" aria-label="pagination">
                  {previous && (
                    <Link to={`/${previous.slug}`} rel="prev" className="pagination-previous button is-large">← Previous case study: {previous.title}</Link>
                  )}
                  {next && (
                  <Link to={`/${next.slug}`} rel="next" className="pagination-next button is-large">Next case study: {next.title} →</Link>
                  )}
              </div>
            </div>
          </div>
        </div>
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      date(formatString: "MMMM DD, YYYY h:mma")
      modified(formatString: "MMMM DD, YYYY h:mma")
      title
      content
      excerpt
      link
      categories {
        name
        slug
      }
      tags{
        name
        slug
      }
      author {
        name
      }
      featured_media{
	    source_url
      }
    }
  }
`;