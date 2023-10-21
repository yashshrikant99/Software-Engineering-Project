const express = require('express')
var request = require('request')

const app = express()

const port = 8080
app.listen(port, () => console.log(`Server listening at port ${port}`))

app.get('/', (req, res) => {
  res.send('Welcome to Stock Trainer backend')
})

app.get('/stocks', (req, res) => {
  res.send('About route')
})
