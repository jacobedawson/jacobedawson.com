const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const images = require("remark-images");
const emoji = require("remark-emoji");

const withMDX = require("@next/mdx")({
  extension: /\.md|mdx?$/,
  options: {
    remarkPlugins: [images, emoji]
  }
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "md", "mdx"]
    }
  ],
  [
    optimizedImages,
    {
      mozjpeg: {},
      optipng: {}
    }
  ]
  // ,
  // {
  //   exportPathMap: function() {
  //     return {
  //       "/": { page: "/" },
  //       "/about": { page: "/about" },
  //       "/projects": { page: "/projects" },
  //       "/blog": { page: "/blog" }
  //     };
  //   }
  // }
]);
