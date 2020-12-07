# Client

```js
const Client = require("sentinel-api");

const client = new Client(<StaffAuthKey>);
// For the Staff Auth Key parameter of the Client Constructor,
// use your own Sentinel Staff Auth Key
// If you don't have one, use "guest"

// Note: Without a Staff Auth Key, you can't access Staff Endpoints
```

# Fetching Ban Information

```js
const banObject = await client.bans.getInfo(<UserID>);
// The above example requires to be run in an async function
    
client.bans.getInfo(<UserID>).then(banObject => { 
  // You can use the banObject here    
});
    
// Note: This endpoint can be accessed by any user and does not 
// require a Staff Auth Key
```
# sentinel-api-js
"# sentinel-api-js" 
