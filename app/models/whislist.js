'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class whislist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  whislist.init({
    id_booking: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'whislist',
  });
  return whislist;
};