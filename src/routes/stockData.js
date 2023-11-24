const express = require('express')
const router = new express.Router()
var stockDataLogic = require('../middleware/stockData')

router.get('/stock-data', async (req, res) => {
  const result = await stockDataLogic.getData(
    req.query['symbol'],
    req.query['from'],
    req.query['to'],
    req.query['period']
  )
  res.send(result)
})

router.get('/stock-name/:query', async (req, res) => {
  try {
    var result = await stockDataLogic.getStockName(req.params['query'])
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})

router.get('/top-gainers', async (req, res) => {
  try {
    var result = await stockDataLogic.fetchTopGainers()
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
