const db = require('../db')
const fs = require("fs") 
const { Item, Article } = require('./models')

const desert = fs.readFileSync("/home/notnull/projex/bootstrap/server/db/desert.txt", "utf8")


const testItem = {
    name: 'item'
}

const testArticle = {
    title: "Desert",
    text: desert
    
}

console.log(Article) 
async function runSeed() {
    await db.sync({ force: true })
    console.log('db synced!')
    console.log('seeding...')
    try {
	await Item.create(testItem)
	await Article.create(testArticle)
	console.log('seeded successfully')
    } catch (err) {
	console.error(err)
	process.exitCode = 1
    } finally {
	console.log('closing db connection')
	await db.close()
	console.log('db connection closed')
    }
}

runSeed()
