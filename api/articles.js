const router = require('express').Router()
const { Article } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
	const articles = await Article.findAll()

	res.status(201).send(articles)
    } catch (err) {
	next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
	const article = await Article.findById(req.params.id)
	console.log(article.title)
	console.log("by: " + article.author)
	console.log(article.text)
	res.status(201).send(article)
    } catch (err) {
	next(err)
    }
})

router.post('/', async (req, res, next) => {
    const body = req.body
    try {
	const article = await Article.create(body)
	res.redirect(article.id)
    } catch (err) {
	next(err)
    }
})
