const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
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
    .then(() => {
      return graphql(`
        {
          allWordpressPost(
            sort: { fields: date, order: DESC }
          ){
            edges {
              node {
                id
                slug
                title
                status
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

      const postTemplate = path.resolve(`./src/templates/post.js`)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)
      

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressPost.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/${post.slug}/`,
          component: postTemplate,
          context: {
            id: post.id
          },
        })
      })

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: userConfig.postsPerPage,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
        component: blogTemplate,
      });
      
      // Create one page per blog post, with a link to the previous and next blog posts
      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;
        createPage({
          path: post.node.slug,
          component: postTemplate,
          context: {
            slug: post.node.slug,
            previous,
            next
          }
        });
      });
    })
    .then(() => {
      return graphql(`
        {
          allWordpressCategory(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
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

      const categoriesTemplate = path.resolve(`./src/templates/category.js`)

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: categoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressTag(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
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

      const tagsTemplate = path.resolve(`./src/templates/tag.js`)

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
        createPage({
          path: `/tags/${tag.slug}/`,
          component: tagsTemplate,
          context: {
            name: tag.name,
            slug: tag.slug,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpUsers {
            edges {
              node {
                id
                slug
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

      const authorTemplate = path.resolve(`./src/templates/author.js`)
      const casestudyTemplate = path.resolve(`./src/templates/casestudy.js`)

      _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
        createPage({
          path: `/author/${author.slug}`,
          component: authorTemplate,
          context: {
            id: author.id,
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
