app.get('/', (req, res) => {
  res.send('Welcome to Stock Trainer backend')
})

app.get('/stock-data/:symbol', async (req, res) => {
  const result = await getData(
    req.params['symbol'],
    req.query['fromDate'],
    req.query['toDate'],
    req.query['period']
  )
  res.send(result)
})

app.get('/stock-name/:query', async (req, res) => {
  try {
    var result = await getStockName(req.params['query'])
    console.log(result)
    res.send(result)
  } catch (e) {
    console.log(e)
  }
})
