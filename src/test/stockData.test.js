const app = require('../server')
const supertest = require('supertest')
const db = require('../models')

describe('Testing search stock', () => {
  /**
   * Testing search functionality for stock Api
   */
  test('GET Stock name /api/stockData', async () => {
    const expectedData = {
      exchange: 'NMS',
      shortname: 'Tesla, Inc.',
      quoteType: 'EQUITY',
      symbol: 'TSLA',
      index: 'quotes',
      score: 648324,
      typeDisp: 'Equity',
      longname: 'Tesla, Inc.',
      exchDisp: 'NASDAQ',
      sector: 'Consumer Cyclical',
      sectorDisp: 'Consumer Cyclical',
      industry: 'Auto Manufacturers',
      industryDisp: 'Auto Manufacturers',
      dispSecIndFlag: true,
      logoUrl: 'https://s.yimg.com/lb/brands/150x150_tesla.png',
      isYahooFinance: true
    }

    await supertest(app)
      .get('/api-stockdata/stock-name/tesla')
      .expect(200)
      .then(async response => {
        await expect(response.body).toHaveLength(3)
        await expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(expectedData)])
        )
      })
  })
})

describe('Testing fetching the stock data given the name', () => {
  test('GET Stock name /api/stockdata/stockName', async () => {
    const expectedData = {
      date: '2023-11-22T05:00:00.000Z',
      open: 242.039993,
      high: 244.009995,
      low: 231.399994,
      close: 234.210007,
      adjClose: 234.210007,
      volume: 117950600,
      symbol: 'tsla'
    }

    await supertest(app)
      .get(
        '/api-stockdata/stock-data?symbol=tsla&from=2023-11-14&to=2023-11-24&period=d'
      )
      .expect(200)
      .then(async response => {
        await expect(response.body).toHaveLength(7)
        await expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(expectedData)])
        )
      })
  })
})

describe('Testing top gainers functionality', () => {
  test('GET Stock name /api/stockData/top-gainers', async () => {
    await supertest(app)
      .get('/api-stockdata/top-gainers')
      .expect(200)
      .then(async response => {
        await expect(response.body.length).toBeGreaterThanOrEqual(5)
      })
  })
})
