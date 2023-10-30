const express = require('express')
const yfinance = require('yahoo-finance')
const request = require('request')

const app = express()

const port = 8080
app.listen(port, () => console.log(`Server listening at port ${port}`))

function getData (symbol, fromDate, toDate, period) {
  try {
    return yfinance.historical(
      {
        symbol: symbol,
        from: fromDate,
        to: toDate,
        period: period // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      },
      function (err, quotes) {
        //...
      }
    )
  } catch (error) {
    return
  }
}

async function getStockName (query) {
  var options = {
    method: 'GET',
    url: `https://query2.finance.yahoo.com/v1/finance/search?q=${query}&lang=en-US&region=US&enableFuzzyQuery=false&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&newsQueryId=news_cie_vespa&enableCb=true&enableNavLinks=true&enableEnhancedTrivialQuery=true&enableResearchReports=true&enableCulturalAssets=true&enableLogoUrl=true`,
    headers: {
      'sec-ch-ua': '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
      Referer: 'https://finance.yahoo.com/lookup/',
      'sec-ch-ua-mobile': '?0'
    }
  }
  return new Promise(function (resolve, reject) {
    request.get(options, function (err, resp, body) {
      if (err) {
        reject(err)
      } else {
        resolve(filterStockNames(JSON.parse(body)['quotes']))
      }
    })
  })
}
// function to filter only stocks which are equity based
async function filterStockNames (response) {
  var finalResponse = []
  response.forEach(element => {
    if (element['quoteType'] == 'EQUITY' || element['quoteType'] == 'INDEX')
      finalResponse.push(element)
  })
  return finalResponse
}
