const router = require('express').Router()
const { Item } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()

    res.status(201).send(items)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const item = await Item.create(req.body)

    res.status(201).json(item)
  } catch (err) {
    next(err)
  }
})
