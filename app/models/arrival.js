'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arrival extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  arrival.init({
    id_airport: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'arrival',
  });
  return arrival;
};