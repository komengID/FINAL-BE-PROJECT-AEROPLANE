'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_passenger: {
        type: Sequelize.INTEGER
      },
      id_departure: {
        type: Sequelize.INTEGER
      },
      id_arrival: {
        type: Sequelize.INTEGER
      },
      departureDate: {
        type: Sequelize.DATE
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      classType: {
        type: Sequelize.INTEGER
      },
      total_booking: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};