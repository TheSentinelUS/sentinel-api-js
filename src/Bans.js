class Bans {
  constructor(client) {
    this.client = client;
  }

  async getInfo(userID) {
    if (typeof userID != "string")
      throw new TypeError("Bans.prototype.getInfo parameter must be a string");
    if (userID.length < 15 || userID.length > 18 || isNaN(parseInt(userID)))
      throw new RangeError("An invalid userID has been provided");
    return await this.client.api.bans.info(userID);
  }
}

module.exports = Bans;
