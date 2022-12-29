'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('passenger', [{
      passenger_name:'Selly Bintang Melananda',
      nik:'350948483'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('passenger', null, {});
  }
};
