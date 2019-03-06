const router = require('express').Router()
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
