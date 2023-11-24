var request = require('request')
const yfinance = require('yahoo-finance')

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
    return []
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
// function to filter only stocks which are equity or index
async function filterStockNames (response) {
  var finalResponse = []

  response.forEach(element => {
    if (element['quoteType'] == 'EQUITY' || element['quoteType'] == 'INDEX')
      finalResponse.push(element)
  })
  return finalResponse
}

async function fetchTopGainers () {
  var options = {
    method: 'POST',
    url: 'https://query2.finance.yahoo.com/v1/finance/screener?crumb=J5h%2FiJNCaF9&lang=en-US&region=US&formatted=true&corsDomain=finance.yahoo.com',
    headers: {
      authority: 'query2.finance.yahoo.com',
      accept: '*/*',
      'accept-language': 'en-GB,en;q=0.8',
      'content-type': 'application/json',
      origin: 'https://finance.yahoo.com',
      cookie:
        'GUC=AQEBCAFlNXVlXUIa9APw&s=AQAAAMhGca--&g=ZTQq3w; A1=d=AQABBEDN9GQCEKKli-5Ygkwu_Ak4iDJcHIkFEgEBCAF1NWVdZdxV0iMA_eMBAAcIQM30ZDJcHIk&S=AQAAAtlbgcRFg0_wKaNBp2qjClw; A3=d=AQABBEDN9GQCEKKli-5Ygkwu_Ak4iDJcHIkFEgEBCAF1NWVdZdxV0iMA_eMBAAcIQM30ZDJcHIk&S=AQAAAtlbgcRFg0_wKaNBp2qjClw; A1S=d=AQABBEDN9GQCEKKli-5Ygkwu_Ak4iDJcHIkFEgEBCAF1NWVdZdxV0iMA_eMBAAcIQM30ZDJcHIk&S=AQAAAtlbgcRFg0_wKaNBp2qjClw; PRF=newChartbetateaser%3D0%252C1700791895511%26t%3DCL%253DF',
      referer: 'https://finance.yahoo.com/',
      'sec-ch-ua': '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    },
    body: JSON.stringify({
      offset: 0,
      size: 25,
      sortField: 'percentchange',
      sortType: 'desc',
      quoteType: 'EQUITY',
      query: {
        operator: 'AND',
        operands: [
          {
            operator: 'GT',
            operands: ['percentchange', 3]
          },
          {
            operator: 'eq',
            operands: ['region', 'us']
          },
          {
            operator: 'or',
            operands: [
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 2000000000, 10000000000]
              },
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 10000000000, 100000000000]
              },
              {
                operator: 'GT',
                operands: ['intradaymarketcap', 100000000000]
              }
            ]
          },
          {
            operator: 'gte',
            operands: ['intradayprice', 5]
          },
          {
            operator: 'gt',
            operands: ['dayvolume', 15000]
          }
        ]
      },
      userId: '',
      userIdType: 'guid'
    })
  }
  return new Promise(function (resolve, reject) {
    request.post(options, function (err, resp, body) {
      if (err) {
        reject(err)
      } else {
        console.log(JSON.parse(body))
        resolve(
          filterStockNames(JSON.parse(body)['finance']['result'][0]['quotes'])
        )
      }
    })
  })
}

module.exports = { getData, getStockName, filterStockNames, fetchTopGainers }
