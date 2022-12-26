'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.airport, { foreignKey: 'id_airport' });
      this.hasMany(models.booking, { foreignKey: 'id_ticket' });
    }
  }
  ticket.init({
    id_airport: DataTypes.INTEGER,
    departure_date: DataTypes.DATE,
    arrival_date: DataTypes.DATE,
    class: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};