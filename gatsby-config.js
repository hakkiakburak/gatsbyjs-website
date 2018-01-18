module.exports = {
    siteMetadata: {
        title: `Hakki Akburak`,
        author: `Hakki Akburak`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-catch-links',
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
                    resolve: `gatsby-source-filesystem`,
                    options: {
                        path: `${__dirname}/src/pages`,
                        name: 'pages'
                    }
                },
                {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-smartypants"
        ],
      },
    },
    {
              resolve: `gatsby-plugin-favicon`,
              options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: false,
                  windows: false
                 }
               }
             }
  ]
};
