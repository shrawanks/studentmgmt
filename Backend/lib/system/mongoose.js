const mongoose = require('mongoose')
module.exports = function() {
	console.log('Hello from mongoose service');
	// mongoose.connect('mongodb://localhost/testDB');
	mongoose.connect('mongodb://localhost/smsdbs');

	mongoose.connection.on('connected',()=>{
		console.log('Database connected')
	})

	mongoose.connection.on('error',()=>{
		console.log('Database connection error')
	})

}