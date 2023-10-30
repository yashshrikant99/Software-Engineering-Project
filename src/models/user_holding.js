'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_holding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_holding.init({
    user_id: DataTypes.INTEGER,
    stock_name: DataTypes.TEXT,
    buy_price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    buy_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'user_holding',
  });
  return User_holding;
};