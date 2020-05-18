const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const userConfig = require('./config');

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        createPage({
          path: `/${page.slug}/`,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })
    
    // Custom post type Case Study
    .then(() => {
      return graphql(`
        {
          allWordpressWpCasestudy {
		    edges {
		      node {
		        title
		        slug
		        content
		        id
		        acf {
		          	another_brand_big_text
					another_brand_label
					another_brand_small_text
					background_color_info
					brand_activation_big_text
					brand_activation_label
					brand_activation_small_text
					brand_activation_image {
					  source_url
					}
			     	description_info
			        heading_info
			        image_caption_info
			        images_three_and_four_description
			        info_one
			        info_two
			        venue_or_anything_number_information_small_text
			        venue_or_anything_number_information
			        venue_or_anything_label
			        venue_number_info
			        venue__logistics_label
			        right_corner_image_info {
			          source_url
			        }
			        portrait_image_small_text
			        portrait_image_heading
			        logistics_small_text
			        logistics_label
			        logistics_big_text
			        image_title_one_info
			        image_two_info {
			          source_url
			        }
			        image_three_portrait {
			          source_url
			        }
			        image_three_info {
			          source_url
			        }
			        info_three_image {
			          source_url
			        }
			        image_one_info {
			          source_url
			        }
			        image_four_info {
			          source_url
			        }
			        another_brand_right_image{
				        source_url
			        }
			        extra_image_one{
				        source_url
			        }
			        extra_image_two{
				        source_url
			        }
			        logistics_image{
						source_url
	        		}
	        		extra_text_box_testimonial
		          video_url
		          venue
		          project_event_name
		          location
		          client_name
		          client_category {
		            value
		            label
		          }
		        }
		      }
		    }
		  }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const casestudyTemplate = path.resolve(`./src/templates/casestudy.js`)

      _.each(result.data.allWordpressWpCasestudy.edges, ({ node: casestudy }) => {
        createPage({
          path: `/casestudy/${casestudy.slug}`,
          component: casestudyTemplate,
          context: {
	        slug: casestudy.slug,
            id: casestudy.id,
          },
        })
      })
    })
    
    
}

