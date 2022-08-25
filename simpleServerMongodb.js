const express = require('express');
const chalk = require('chalk');

const app = express()

app.listen(80,  _ => console.log(chalk.blue.bgCyanBright(`server is running on http://127.0.1`)))

app.get('/', (req, res) => {
  res.json({title: 'welcome'})
})