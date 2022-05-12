module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/css/**/*.css'
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}