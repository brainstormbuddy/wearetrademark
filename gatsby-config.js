const userConfig = require('./config');

module.exports = {
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
    description: userConfig.description,
    siteUrl: userConfig.siteUrl,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://x.netlify.com`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: userConfig.author,
            GitHub: `zakirsajib`
          }
        ],
        thanks: [`Gatsby`, `Node`],
        site: {
          'Last update': `2020/02/01`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code`
        },
        note: `Made in Cyprus.`
      }
    },
    {
      	resolve: `gatsby-plugin-google-fonts`,
      	options: {
	        fonts: [
	           `Maven+Pro`,
	           `Open+Sans\:300, 400, 500, 700`
	        ],
	        display: 'swap'
	    },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: userConfig.primaryColor,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'trademark-wordpress.dgmedialink.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        perPage: userConfig.postsPerPage,
        concurrentRequests: 100,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://www.google-analytics.com",
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com"
        ]
      }
    },
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: userConfig.title,
        short_name: userConfig.title,
        start_url: userConfig.siteUrl,
        background_color: '#f9fafc',
        theme_color: userConfig.primaryColor,
        display: 'minimal-ui',
        icon: 'src/img/logoBlack.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: userConfig.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img/`,
      },
    },
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Ignore
        ignore: ['styles/page.css'],
        // Purge only the main css file
        purgeOnly: ['/all.sass','styles/'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
