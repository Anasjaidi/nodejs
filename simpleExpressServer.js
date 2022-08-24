const path = require('path');
const express = require('express');
const chalk = require('chalk');
const port = 80

const app = express()
app.get('/', (req, res , next) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res , next) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.get('/old', (req, res , next) => {
  res.redirect('/about')
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  
})

app.listen(80, _ => console.log(chalk.blue(`server running on http://127.0.1`)))