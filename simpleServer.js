const chalk = require('chalk');
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const port = 80;
const server = http.createServer( async (req , res) => {
  let status = 200;
  let file = ''
  res.setHeader('Content-type', 'text/html')
  switch (req.url) {
    case '/':
      file = 'index.html'
      break;
    case '/about':
      file = 'about.html'
      break;
    case '/old':
      file = 'about.html'
      res.setHeader('Location', '/about')
      status = 301
      break;
    default:
      file = '404.html'
      status = 404
      break;
  }
  let data = ''
  getFile = async _ => 
  {
    try {

      data = await fs.readFile(path.join(__dirname, 'views', file))
      res.statusCode = status
      res.write(data.toString())
    }catch(err)
    {
      console.log(err);
    }
  }
  await getFile()
  res.end()
})

server.listen(port, _ => {
  console.log(chalk.blue(`server running on http://127.0.1`))
})