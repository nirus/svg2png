const express = require('express')
const next = require('next')
const bodyParser = require("body-parser");
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const reverseProxy = require("./reverseproxy");
require('isomorphic-fetch');

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // Serve the sample
  server.use('/sample', express.static('image-samples'))

  server.get('/svg2img', (req, res) => {
    return reverseProxy(req, res);
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})