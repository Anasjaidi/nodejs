const express = require('express');
const chalk = require('chalk');
const {getDb, connectDb} = require('./db');

const app = express()

let db

connectDb( _ => {
  if (!_) {
    app.listen(80,  _ => console.log(chalk.blue.bgCyanBright(`server is running on http://127.0.1`)))
  }
  db = getDb()
})


app.get('/', async (req, res) => {
  let books = []
  await db.collection('books').find().sort({title: -1}).forEach(book => {
    books.push(book)
  });
  res.json(books)
})