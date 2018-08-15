module.exports = app => {
    app.use('/user', (req, res, next) => {
	    let user = require('../api/user')
	    user(req, res, next)
	})

	app.use('/subject', (req, res, next) => {
	    let subject = require('../api/subject')
	    subject(req, res, next)
	})
	
	app.use('/marksheet',(req,res,next)=>{
		let marksheet = require('../api/marksheet')
		marksheet(req,res,next)
	})

}