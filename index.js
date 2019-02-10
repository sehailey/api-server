const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const ascii = require('./ascii')
const port = process.env.PORT || 1337

app.use(morgan('tiny'))
YOU HAVE NO CHANCE TO SURVIVE MAKE YOUR TIME
HA HA HA 
// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('body-parser').text())
app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}


// app.get('/articles', async (req, res, next) => {
//     try {
// 	const articles = await Article.findAll()
// 	console.log(articles)

// 	res.status(201).send(articles)
//     } catch (err) {
// 	next(err)
//     }
// })

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'))
)

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
