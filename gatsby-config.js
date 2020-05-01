module.exports = {
  siteMetadata: {
    title: 'Gatsby intro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
