const express = require('express')
const yfinance = require('yahoo-finance')
const request = require('request')

const app = express()

const port = 8080
app.listen(port, () => console.log(`Server listening at port ${port}`))

app.get('/', (req, res) => {
  res.send('Welcome to Stock Trainer backend')
})

app.get('/stock/:symbol', async (req, res) => {
  const result = await getData(req.params['symbol'])
  res.send(result)
})

app.get('/stock-data/:symbol', async (req, res) => {
  const result = await getData(req.params['symbol'])
  res.send(result)
})

function getData (symbol) {
  return yfinance.historical(
    {
      symbol: symbol,
      from: '2012-01-01',
      to: '2012-12-31'
      // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    },
    function (err, quotes) {
      //...
    }
  )
}
