module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addWatchTarget("./src/css");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}