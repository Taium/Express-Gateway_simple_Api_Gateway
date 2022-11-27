const express = require('express')
const app = express()
const port = 4001

app.get('/new', (req, res) => {
  res.send('Hello World from server 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})