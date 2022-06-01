// const { default: axios } = require('axios');
const EleventyFetch = require("@11ty/eleventy-fetch");
const accessToken = '467e6f39a85967f3f2a045174131634a2aeca2709407d595e093fc1005bb0538';

module.exports = async function() {
  let url = 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken;

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};

// module.exports = async () => {
//   try {
//     let res = await axios({
//       url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
//       method: 'get',
//       timeout: 8000,
//       contentType:"application/json; charset=utf-8"
//     })   
//     return res.data
//   }
//   catch (err) {
//     console.error(err);
//   }
// };