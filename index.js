const express = require('express')

const app = express()

app.use(express.json())

const port = 3000
const livereload = require('livereload')
const connectLivereload = require('connect-livereload')

const livereloadServer = livereload.createServer()

livereloadServer.watch(__dirname + '/client')

app.use(express.static(__dirname + '/client'))
app.use(connectLivereload())

app.get('/', (req, res) => {
	res.json('123')
})

app.listen(port, () => {
	console.log('app')
})
