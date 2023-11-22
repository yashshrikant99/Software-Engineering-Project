'use strict'
const { Model } = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here

//     }
//   }
//   User.init({
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     DoB: DataTypes.DATEONLY,
//     profile_img: DataTypes.TEXT,
//     funds_available: DataTypes.INTEGER,
//   }, {
//     seq: sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    DoB: {
      type: Sequelize.DATEONLY
    },
    profile_img: {
      type: Sequelize.STRING
    },
    funds_available: {
      type: Sequelize.INTEGER,
      defaultValue: 0
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
  User.associate = function (models) {}

  return User;
}
