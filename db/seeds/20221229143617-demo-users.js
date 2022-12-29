'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Selly',
      lastName: 'Bintang',
      email: 'selly@gmail.com',
      password:'selly1234',
      username:'selly',
      country_code: +62,
      phone_number:'087589383838',
      address:'Banyuwangi',
      role:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};