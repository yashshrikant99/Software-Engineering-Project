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
  const UserWatchList = sequelize.define('user_watchlists', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      long_name:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      price:{
        type: Sequelize.DOUBLE,
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
  UserWatchList.associate = function (models) {}
  
  return UserWatchList
}
