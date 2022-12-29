'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airport', [{
      airport_name: "Tjilik Riwut International Airport",
      airport_location: "Palangkaraya, Kalimantan Tengah, Indonesia"
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airport', null, {});
  }
};

