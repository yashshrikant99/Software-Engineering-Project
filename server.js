const express = require('express')
var request = require('request')
require('dotenv').config()
const app = express()

const port = process.env.PORT 
app.listen(port, () => console.log(`Server listening at port ${port}`))



app.get('/', (req, res, next) => {
  res.send('Welcome to Stock Trainer backend')
})



