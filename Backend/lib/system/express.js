const bodyParser = require('body-parser')
var cors = require('cors')

module.exports = app => {
	/**
	 * define static folder to access files
	 */
	// app.use(express.static(__dirname + '/public'))
	// app.use('/uploads', express.static(__dirname + '/uploads'))

	/**
	 * set view engine
	 */
	// app.set('view_engine', 'ejs')
	// app.engine('html', require('ejs').renderFile)

	// *
	//  * initialize bodyparser
	 app.use(cors())
	 app.use(bodyParser.json())
}