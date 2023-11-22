const express = require('express')
const sequelize = require('sequelize')
const cors = require('cors')
const stockData = require('./routes/stockData')

require('dotenv').config()
var bodyParser = require('body-parser')
const app = express()
const userRouter = require('./routes/user')
const userWatchListRouter = require('./routes/userWatchlist')

//sequelize.authenticate();
app.use(cors())
const port = process.env.PORT || 8080
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
const db = require('./models')
const { quote } = require('yahoo-finance')
db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch(err => {
    console.log('Failed to sync db: ' + err.message)
  })

app.use(userRouter)
app.use(userWatchListRouter)
app.listen(port, () => console.log(`Server listening at port ${port}`))

app.get('/', (req, res) => {
  res.send('Welcome to Stock Trainer backend')
})

app.get('/stock-data', async (req, res) => {
  const result = await stockData.getData(
    req.query['symbol'],
    req.query['from'],
    req.query['to'],
    req.query['period']
  )
  res.send(result)
})

app.get('/stock-name/:query', async (req, res) => {
  try {
    var result = await stockData.getStockName(req.params['query'])
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})

app.get('/top-gainers', async (req, res) => {
  try {
    var result = await stockData.fetchTopGainers()
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})
