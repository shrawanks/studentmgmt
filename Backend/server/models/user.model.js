const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017/testDB');

const schema = mongoose.Schema

const userSchema = new schema({
	f_name: String,
	l_name: String,
	dob:String,
	email:{
		type: String,
		required: true,
		unique:true
	},
	phone: Number,
	address:String,
	password:String,
	type: Number,
	gender:String,
	classID:Number
},{
		timestamps:true
	})

module.exports = mongoose.model('users',userSchema)