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
router.post('/login', controller.login.bind(controller))
router.get('/getSubjectByClass/:classId',controller.getSubjectByClass.bind(controller))
module.exports = router