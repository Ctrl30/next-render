// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const withCss = require("@zeit/next-css");

// module.exports = withSass(
//   withCSS({
//     cssModules: true,
//     cssLoaderOptions: {
//       localIdentName: "[local]___[hash:base64:4]",
//     },
//   })
// );

// module.exports = withCss({});

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

module.exports = () =>
  withSass({
    ...withCSS(),
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: "[local]___[hash:base64:4]",
    },
  });
