const chalk = require('chalk');
const http = require('http');
const port = 80;
const server = http.createServer((req , res) => {
  console.log(chalk.red(req.method), chalk.green(req.url));
  res.end()
})

server.listen(port, _ => {
  console.log(chalk.blue(`server running on http://127.0.1`))
})