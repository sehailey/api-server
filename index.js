const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const ascii = require('./ascii')
//const proxy = require('http-proxy-middleware')
const port = process.env.PORT || 1337

app.use(morgan('tiny'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('body-parser').text())
app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, 'dist')))
}
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  next()
})

app.listen(port, () => {
  console.log('\n' + ascii + '\n')
  console.log(`Doin' haxor stuff on port ${port}`)
})
