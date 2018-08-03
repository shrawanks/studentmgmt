module.exports = app => {
    app.use('/user', (req, res, next) => {
	    let user = require('../api/user')
	    user(req, res, next)
	})

	app.use('/book', (req, res, next) => {
	    let book = require('../api/booking')
	    book(req, res, next)
	})
}