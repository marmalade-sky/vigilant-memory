module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget("./src/css/");
  
  eleventyConfig.addGlobalData("illustrationSrc", "/assets/svg/illustration");
  eleventyConfig.addGlobalData("iconSrc", "/assets/svg/icons");
  eleventyConfig.addGlobalData("shapeSrc", "/assets/svg/shapes");

  eleventyConfig.addCollection("navigation", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}