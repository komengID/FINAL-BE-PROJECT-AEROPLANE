'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detailBooking.init({
    id_booking: DataTypes.INTEGER,
    price_detail: DataTypes.INTEGER,
    desc_detail: DataTypes.STRING,
    paid_state: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detailBooking',
  });
  return detailBooking;
};