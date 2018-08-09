module.exports = app => {
    app.use('/user', (req, res, next) => {
	    let user = require('../api/user')
	    user(req, res, next)
	})

	app.use('/subject', (req, res, next) => {
	    let subject = require('../api/subject')
	    subject(req, res, next)
	})

}