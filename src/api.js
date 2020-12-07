const axios = require("axios");

class API {
  constructor(client) {
    this.bans = {
      info: async function(user) {
        return await axios.get(`https://api.sentinel.llc/bans/${user}`);
      }
    };
  }
}

module.exports = API;
