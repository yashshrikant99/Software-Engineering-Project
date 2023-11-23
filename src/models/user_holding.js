'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const UserHolding = sequelize.define('user_holding', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    stock_name: {
      type: Sequelize.TEXT
    },
    buy_price: {
      type: Sequelize.DOUBLE
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    buy_time: {
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
  UserHolding.associate = function (models) {}
  return UserHolding
}
