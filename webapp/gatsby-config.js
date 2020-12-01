const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `User-Interface-Designer`,
    description: `Portfolio site for gentleibkay`,
    author: `cristian p. <cristianpopescu12@protonmail.com>`,
    phoneNumber: `0123456789`,
    email: `gentleibkay@gmail.com `,
    siteUrl: `https://bkay.design`,
    keywords: ["Graphic Designer", "Pencil Art", "Pencil Artist", "Design", "Designer", "User Interface Designer", "User Interface Design", "User Experience Designer", "User Experience Design", "UI", "UX", "UIUX", "UI/UX", "Logo Designer", "T-shirt Designer", "Tshirt Design", "Portrait Art", "Graphics Design", "Poster Design", "Flyer Design", "web design services", "website redesign services", "logo design services", "banner design services", "landing page design services", "responsive web designer", "professional web designer", "freelance web designer", "web design for small businesses and individuals", "web design solutions", "Graphic design", "logo design"]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
  ],
}
