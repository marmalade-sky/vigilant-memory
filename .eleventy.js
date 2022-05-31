module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget("./src/css/");
  
  eleventyConfig.addGlobalData("illustrationSrc", "/assets/svg/illustration");
  eleventyConfig.addGlobalData("iconSrc", "/assets/svg/icons");

  eleventyConfig.addCollection("orderedDemos", function (collection) {
    return collection.getFilteredByTag("demos").sort((a, b) => {
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