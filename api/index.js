const router = require('express').Router()
module.exports = router

router.use('/items', require('./items'))
router.use('/articles', require('./articles'))

router.get('/', async (req, res, next) => {
  try {
    res.send('/n-------/nHello from Express!/n--------/n')
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found!!!!!!!')
  error.status = 404
  next(error)
})
