const express = require('express')
const router = new express.Router()
const UserHolding = require('../middleware/userHolding')
const User = require('../middleware/user')

// add a holding given the user id
router.post('/holdings/:uid', async (req, res) => {
  try {
    const uid = req.params['uid']
    const holding = { ...req.body }
    const insertData = {
      user_id: uid,
      stock_name: holding.stock_name,
      buy_price: holding.buy_price,
      quantity: holding.quantity
    }

    const userExists = await User.getUserDetails(uid)
    if (userExists) {
      // fetch the holdings for the given stock
      const Holdings = await UserHolding.getUserHoldingsFormatted(uid)

      // sell => dont allow if the qnty to be sold is more than available
      if (holding.quantity < 0) {
        // check if the stock is present in the user holdings - only then allow the sell to happen
        if (Holdings.hasOwnProperty(holding.stock_name)) {
          // if qnty to be sold <= present holding qnty -> allow sell to happen
          if (
            Math.abs(holding.quantity) <=
            Holdings[holding.stock_name]['quantity']
          ) {
            const created = await UserHolding.Create(insertData)

            // add funds once the stock has been sold
            if (created) {
              await User.modifyFunds(uid, holding.buy_price * holding.quantity)
              res.send({ created })
            } else res.status(400).send(`Holdings not created`)
          } else
            res
              .status(400)
              .send(
                `Quantity to be sold:${
                  holding.quantity
                } whereas present quantity: ${
                  Holdings[holding.stock_name]['quantity']
                }`
              )
        } else {
          res
            .status(400)
            .send('Cannot sell a stock which the user does not own')
        }
      }
      // buy => dont allow if calc value is more than funds available
      else {
        var fundsRequired = holding.buy_price * holding.quantity
        if (fundsRequired <= userExists.funds_available) {
          const created = await UserHolding.Create(insertData)
          if (created) {
            await User.modifyFunds(
              uid,
              -1 * (holding.buy_price * holding.quantity)
            )
            res.send({ created })
          } else res.status(400).send(`Holdings not created`)
        } else
          res
            .status(400)
            .send(
              `Funds required is: ${fundsRequired} whereas available funds is only: ${userExists.funds_available}`
            )
      }
    } else {
      res.status(400).send(`User with id:${uid} doesnt exist`)
    }
  } catch (e) {
    res.status(400).send(`Error adding holdings ${e.message}`)
  }
})

// display the holdings given the user-id in raw format
router.get('/holdings/:uid/raw', async (req, res) => {
  try {
    const uid = req.params['uid']
    const Holdings = await UserHolding.getUserHoldingsRaw(uid)
    if (Holdings) {
      res.send(Holdings)
    } else res.status(404).send('Holdings not found')
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// display the holdings given the user-id in formatted fashion
router.get('/holdings/:uid/formatted', async (req, res) => {
  try {
    const uid = req.params['uid']
    const Holdings = await UserHolding.getUserHoldingsFormatted(uid)
    if (Holdings) {
      res.send(Holdings)
    } else res.status(404).send('Holdings not found')
  } catch (e) {
    res.status(400).send(e.message)
  }
})

router.delete('/holding/:uid', async (req, res) => {
  try {
    const uid = req.params['uid']
    const stockName = req.body['stock_name']
    const qnty = req.body['quantity']
    res.send(UserHolding.Delete(uid, stockName, qnty))
  } catch (e) {
    console.log(`Error Deleting the error : ${e.message}`)
  }
})

module.exports = router
