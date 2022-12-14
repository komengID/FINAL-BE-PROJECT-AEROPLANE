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
      defaultValue: "https://pinhome-blog-assets-public.s3.amazonaws.com/2021/11/Gambar-Karikatur-Anak.jpg"  
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