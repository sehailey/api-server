const router = require('express').Router()
const path = require('path')
module.exports = router
const ascii = require('../ascii')

router.use('/items', require('./items'))

router.get('/', async (req, res, next) => {
  try {
    res.json({ ascii })
  } catch (err) {
    console.log(err)
    next()
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found!!!!!!!')
  error.status = 404
  next(error)
})
