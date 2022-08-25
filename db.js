const {MongoClient} = require('mongodb');

let db

module.exports = {
  connectDb: async  _ => {
    try {
    db = await new  MongoClient('mongodb://localhost:27017/bookstore')
    await db.connect()
    db = db.db()
    _()
    } catch (err) {
      console.log(err);
      _(err)
    }
  },
  getDb: _ => db
}