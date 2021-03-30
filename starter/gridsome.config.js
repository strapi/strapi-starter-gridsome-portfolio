// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Strapi Gridsome Portfolio',
  siteDescription: 'A portfolio site made using Gridsome and Strapi',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: (process.env.GRIDSOME_STRAPI_URL || "http://localhost:1337") + "/graphql",
        fieldName: 'strapi',
        typeName: 'strapiTypes'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
    }
  ],
}
