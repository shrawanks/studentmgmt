const mongoose = require('mongoose')
const schema = mongoose.Schema


const marksheetSchema = new schema({
	student_id:{
		type: Number,
		required: true
	} ,
	subject:[{name:String,obtainmark:String}]	
},{
		timestamps:true
	})

module.exports = mongoose.model('marksheet',marksheetSchema)
