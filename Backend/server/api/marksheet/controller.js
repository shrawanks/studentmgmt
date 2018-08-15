const mongoose = require('mongoose')
const Marksheet = mongoose.model('marksheet')

class marksheetController {
	constructor() {}
	
	create(req, res) {
   console.log('1')
	}
	
}
module.exports = marksheetController