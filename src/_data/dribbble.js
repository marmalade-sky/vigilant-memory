const EleventyFetch = require("@11ty/eleventy-fetch");
const accessToken = '467e6f39a85967f3f2a045174131634a2aeca2709407d595e093fc1005bb0538';

module.exports = async function() {
  let url = 'https://api.dribbble.com/v2/user/shots?per_page=50&access_token='+accessToken;

  const response = await EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });

  let data = response.filter(d => d.tags.includes("featured"));
	return data;
};