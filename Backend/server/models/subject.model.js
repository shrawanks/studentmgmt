const mongoose = require('mongoose')
const schema = mongoose.Schema


const subjectSchema = new schema({
	name:{
		type: String,
		required: true
	} ,
	classId: Number,
	fullMark:Number,
	passmark:Number	
},{
		timestamps:true
	})

module.exports = mongoose.model('subject',subjectSchema)
