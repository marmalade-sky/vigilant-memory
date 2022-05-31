module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget("./src/css/");
  
  eleventyConfig.addGlobalData("illustrationSrc", "/assets/svg/illustration");
  eleventyConfig.addGlobalData("iconSrc", "/assets/svg/icons");

  eleventyConfig.addCollection("navigation", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addNunjucksShortcode("user", function() {
    // Available in 0.11.0 and above
    console.log(firstName, lastName);
    console.log( this.page );

    // For example:
    console.log( this.page.url );
    console.log( this.page.inputPath );
    console.log( this.page.fileSlug );
    console.log( this.page.order);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}