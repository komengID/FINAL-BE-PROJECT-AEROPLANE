'use strict';

const passangersData = require('../data/passangersData');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('passengers',passangersData,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('passengers', null, {});
  }
};
