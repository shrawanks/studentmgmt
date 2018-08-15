const mongoose = require('mongoose')
const Marksheet = mongoose.model('marksheet')

class marksheetController {
	constructor() {}
	
	create(req, res) {
		let saveObj = {
			student_id: req.body.student_id,
			subject:[{name:req.body.name,obtainmark:req.body.name}]
		}
		//let saveObj = req.body.userObj
		Marksheet.create(saveObj).then(createRes=> {
			//console.log(`Success`)
			res.status(200).send({status:'success',data: createRes})
			//res.send(createRes)
		}).catch(err => {
			//console.log(err)
		//	res.send(err)
		res.status(500).send({status:'failed',data: err})
		})
	}
	
}
module.exports = marksheetController