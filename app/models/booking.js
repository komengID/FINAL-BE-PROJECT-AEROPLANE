'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    id_passenger: DataTypes.INTEGER,
    id_departure: DataTypes.INTEGER,
    id_arrival: DataTypes.INTEGER,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    classType: DataTypes.INTEGER,
    total_booking: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};