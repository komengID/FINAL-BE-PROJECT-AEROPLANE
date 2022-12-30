'use strict';

const airportsData = require('../data/airportsData');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airports', airportsData, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airports', null, {});
  }
};

