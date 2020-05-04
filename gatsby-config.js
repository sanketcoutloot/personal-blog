/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Sanket`,
        description: `Here you can find all the notes/summary for the books that I read, plus other things that I find important.`,
        siteUrl: `https://delog-w3layouts.netlify.com/`,
        home: {
            title: `Hi! I'm Sanket`,
            description: `Here you can find all the notes/summary for the books that read, plus Other things that I find important.`,
        },
        /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
        w3l_dom_key: `5e609f7a2d23fCF_Domain_verify`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_data`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-emojis",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-30027142-1",
                head: true,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
    ],
};
