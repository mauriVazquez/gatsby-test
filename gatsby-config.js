module.exports = {
  siteMetadata: {
    title: "gatsby test",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
};
