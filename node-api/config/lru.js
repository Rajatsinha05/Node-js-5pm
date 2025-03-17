const { LRUCache } = require("lru-cache");

const options = {
  max: 500,
};

const cache = new LRUCache(options);
module.exports = cache;
