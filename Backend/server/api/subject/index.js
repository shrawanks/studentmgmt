const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const controller = new Controller()

router.get('/', controller.get.bind(controller))
router.get('/:id', controller.getOne.bind(controller))
router.post('/', controller.create.bind(controller))
router.post('/save', controller.save.bind(controller))
router.put('/:id', controller.update.bind(controller))
router.delete('/:id', controller.delete.bind(controller))
router.get('/getClass/:classId', controller.getClass.bind(controller))
module.exports = router