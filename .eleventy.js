module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
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