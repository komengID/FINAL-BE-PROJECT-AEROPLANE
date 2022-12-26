'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.booking, { foreignKey: 'id_passenger' });
    }
  }
  passenger.init({
    passenger_name: DataTypes.STRING,
    nik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'passenger',
  });
  return passenger;
};