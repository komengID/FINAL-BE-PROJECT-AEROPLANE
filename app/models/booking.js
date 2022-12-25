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
      this.belongsTo(models.ticket,{ foreignKey: 'id_ticket' }); 
      this.belongsTo(models.users,{ foreignKey: 'id_users' });
    }

    // static associate(models) {
    //   // define association here
    //   this.belongsTo(models.id_ticket,{ foreignKey: 'id_ticket' }); 
    // }

    // static associate(models) {
    //   // define association here
    //   this.belongsTo(models.users,{ foreignKey: 'id_users' });
    // }
  }
  booking.init({
    id_passenger: DataTypes.INTEGER,
    id_ticket: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    class: DataTypes.STRING,
    total_booking: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};