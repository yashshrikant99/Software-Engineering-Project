const express = require('express')
const request = require('request')

const app = express()

const port = 8080
app.listen(port, () => console.log(`Server listening at port ${port}`))
