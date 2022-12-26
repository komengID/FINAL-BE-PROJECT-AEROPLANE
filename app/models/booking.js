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
      this.belongsTo(models.passenger, { foreignKey: 'id_passenger' });
      this.belongsTo(models.ticket, { foreignKey: 'id_ticket' });
      this.belongsTo(models.Users, { foreignKey: 'id_users' });
    }
  }
  booking.init({
    id_passenger: DataTypes.INTEGER,
    id_ticket: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    total_booking: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};