const Bans = require("./Bans.js");
const API = require("./api.js");

class Client {
  constructor(authKey = "guest") {
    this.staffAuth = authKey;

    this.api = new API(this);

    this.bans = new Bans(this);
  }
  
  get api() {
    return this.api;
  }
  get bans() {
    return this.bans;
  }
  get staffAuth() {
    return this.staffAuth;
  }
  set staffAuth(authKey) {
    if (typeof authKey != "string")
      throw new TypeError(`Client constructor parameter must be a string`);
    return this.staffAuth = authKey;
  }
}

module.exports = Client;
