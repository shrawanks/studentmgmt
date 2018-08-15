const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const controller = new Controller()

router.post('/', controller.create.bind(controller))
module.exports = router