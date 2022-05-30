module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget("./src/css/");
  
  eleventyConfig.addGlobalData("illustrationSrc", "/assets/svg/illustration");
  eleventyConfig.addGlobalData("iconSrc", "/assets/svg/icons");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}