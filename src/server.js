const express = require('express')
const routes = require('./routes/user')
const holdingRoutes = require('./routes/userHolding')
const watchListRoutes = require('./routes/userWatchlist')
const stockDataRoutes = require('./routes/stockData')

const app = express()
app.use(express.json())
app.use('/api', routes)
app.use('/api-holdings', holdingRoutes)
app.use('/api-watchlists', watchListRoutes)
app.use('/api-stockdata', stockDataRoutes)

module.exports = app