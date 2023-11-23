const { Op, sequelize, DataTypes } = require('sequelize')
const db = require('../models')
const UserHolding = db.user_holding

// checks if holdings exists for any given user
async function getUserHoldingsRaw (uid) {
  try {
    const holdings = await UserHolding.findAll({
      where: {
        user_id: uid
      }
    })
    return holdings
  } catch (e) {
    console.log(`Cant find holdings for user ${uid}`, e.message)
  }
}
async function getUserHoldingsFormatted (uid) {
  try {
    const Holdings = await UserHolding.findAll({
      where: {
        user_id: uid
      }
    })

    // aggregate the holdings and display the result to the user
    var aggrHoldings = {}
    for (i in Holdings) {
      var stockName = Holdings[i]['stock_name']
      var qnty = Holdings[i]['quantity']
      var buyPrice = Holdings[i]['buy_price']
      var investedValue = qnty * buyPrice

      // skip the stock names which have the name null
      if (stockName == undefined) continue

      if (aggrHoldings.hasOwnProperty(stockName)) {
        aggrHoldings[stockName]['invested_value'] += investedValue
        aggrHoldings[stockName]['quantity'] += qnty
        aggrHoldings[stockName]['avg_price'] =
          aggrHoldings[stockName]['invested_value'] /
          aggrHoldings[stockName]['quantity']
      } else {
        aggrHoldings[stockName] = {}
        aggrHoldings[stockName]['invested_value'] = investedValue
        aggrHoldings[stockName]['quantity'] = qnty
        aggrHoldings[stockName]['avg_price'] = buyPrice
      }
    }
    return aggrHoldings
  } catch (e) {
    console.log(`Cant find holdings for user ${uid}`, e.message)
  }
}

// checks if user exists
async function checkUserHoldings (uid, stock_name) {
  try {
    const exist = await UserHolding.findOne({
      where: {
        user_id: uid,
        stock_name: stock_name
      }
    })
    return exist
  } catch (e) {
    console.log(
      `Unable to find user with holdings ${uid} ${longname}`,
      e.message
    )
  }
}

async function Create (data) {
  try {
    const userHolding = await UserHolding.create({ ...data })
    return userHolding
  } catch (e) {
    console.log('Sequelize Error creating holdings', e.message)
  }
}

async function Delete (uid, stockName, qnty) {
  try {
    const delUser = await UserHolding.destroy({
      where: {
        user_id: uid,
        stock_name: stockName
      }
    })
    return delUser
  } catch (e) {
    console.log('Sequelize Error creating holdings', e.message)
  }
}

module.exports = {
  getUserHoldingsRaw,
  getUserHoldingsFormatted,
  checkUserHoldings,
  Create,
  Delete
}
