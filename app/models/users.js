'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.booking, { foreignKey: 'id_users' });
    }
  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    country_code: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: {
      type: DataTypes.TEXT,
      defaultValue: "https://i.pinimg.com/1200x/3f/11/d1/3f11d1bc55573b7ca55735f94a33ae35.jpg",
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};