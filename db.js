const {MongoClient} = require('mongodb');

let db

module.exports = {
  connectDb: async  _ => {
    try {
    db = await MongoClient('mongodb://12.7.0.1:27017/bookstore')
    _()
    } catch (err) {
      console.log(err);
      _(err)
    }
  },
  getDb: _ => Db
}