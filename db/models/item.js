const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('items', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Item
