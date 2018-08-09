const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('./server/models')
require('./lib/system/express')(app)
require('./lib/system/mongoose')()
require('./server/routes')(app)

app.listen(3000, '192.168.1.229', () => {
	console.log('Example app listening on port 3000!')
})
