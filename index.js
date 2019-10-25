const express = require('express')
const app = express()

SERVER_PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get(/^\/([^\/]*)\/?(.*)$/, function (req, res) {
  console.log('params:',Array.isArray(req.params),req.params)
  res.send('Hello World!')
})

app.listen(SERVER_PORT, function () {
  console.log('Example app listening on port 3000!')

  const http = require('http')
  const options = {
      hostname: 'localhost',
      port: SERVER_PORT,
      path: '/foo/bar'
  }

  http.request(options, res => {
      console.log('status:',res.statusCode);
  }).end()
})
