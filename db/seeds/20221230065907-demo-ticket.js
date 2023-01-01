'use strict';

const ticketsData = require('../data/ticketsData');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {('tickets', ticketsData,{})
    // /**
    //  * Add seed commands here.
},
async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('tickets', null, {});
}
};
