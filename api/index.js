const router = require('express').Router()
module.exports = router

router.use('/items', require('./items'))

router.get('/', async (req, res, next) => {
  try {
    res.send('Hello from Express!')
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found!!!!!!!')
  error.status = 404
  next(error)
})
