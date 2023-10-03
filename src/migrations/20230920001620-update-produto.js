'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('produtos', 'price', {
      type: Sequelize.DECIMAL
    });

    await queryInterface.addColumn('produtos', 'quantity', {
      type: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produtos', 'price');
    await queryInterface.removeColumn('produtos', 'quantity');
  }
};
