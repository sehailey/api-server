const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('articles', {
    title: {
	type: Sequelize.STRING,
	allowNull: false
    },
    author: {
	type: Sequelize.STRING,
	defaultValue: "anonymous"
    },

    text: {
	type: Sequelize.TEXT,
	allowNull: false
    },
})

module.exports = Article
