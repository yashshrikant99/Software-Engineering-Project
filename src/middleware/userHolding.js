const { Op, sequelize, DataTypes } = require('sequelize')
const db = require('../models')
const UserHolding = db.user_holding
const User = require('./user')

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

async function addHoldings (uid, holding, userExists, insertData) {
  // fetch the holdings for the given stock
  const Holdings = await getUserHoldingsFormatted(uid)

  // sell => dont allow if the qnty to be sold is more than available
  if (holding.quantity < 0) {
    // check if the stock is present in the user holdings - only then allow the sell to happen
    if (Holdings.hasOwnProperty(holding.stock_name)) {
      // if qnty to be sold <= present holding qnty -> allow sell to happen
      if (
        Math.abs(holding.quantity) <= Holdings[holding.stock_name]['quantity']
      ) {
        const created = await Create(insertData)

        // add funds once the stock has been sold
        if (created) {
          await User.modifyFunds(uid, -1 * holding.buy_price * holding.quantity)
          return [200, { created }]
        } else return [400, `Holdings not created`]
      } else
        return [
          400,
          `Quantity to be sold:${holding.quantity} whereas present quantity: ${
            Holdings[holding.stock_name]['quantity']
          }`
        ]
    } else {
      return 'Cannot sell a stock which the user does not own'
    }
  }
  // buy => dont allow if calc value is more than funds available
  else {
    var fundsRequired = holding.buy_price * holding.quantity
    if (fundsRequired <= userExists.funds_available) {
      const created = await Create(insertData)
      if (created) {
        await User.modifyFunds(uid, -1 * (holding.buy_price * holding.quantity))
        return [200, { created }]
      } else return [400, `Holdings not created`]
    } else
      return [
        400,
        `Funds required is: ${fundsRequired} whereas available funds is only: ${userExists.funds_available}`
      ]
  }
}

module.exports = {
  getUserHoldingsRaw,
  getUserHoldingsFormatted,
  checkUserHoldings,
  addHoldings,
  Create,
  Delete
}
