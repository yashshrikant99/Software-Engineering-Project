const { Op, sequelize, DataTypes } = require('sequelize')
const db = require('../models')
const User = db.user
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) =>
  async function fetchUserHoldings (user_id) {
    try {
      const user = await User.findAll({ where: { user_id } })
      return user
    } catch (err) {
      console.log('Cant Find User Existence', err.message)
    }
  }
