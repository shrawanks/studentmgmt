const mongoose = require('mongoose')
const User = mongoose.model('users')

class userController {
	constructor() {}

	/**
	 * [get all users]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	get(req, res) {
		User.find({}).then(userRes=> {
			res.send(userRes)
		}).catch(err => {
			res.send(err)
		})
	}

	/**
	 * [getOne user by id]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	getOne(req, res) {
		let query = {
			_id: mongoose.Types.ObjectId(req.params.id)
		}
		// let query = {
		// 	email: req.params.email
		// }
		let projection = {
			// f_name: 1
		}
		User.findOne(query, projection).lean().then(findRes=> {
			res.send(findRes)
		}).catch(err => {
			res.send(err)
		})
	}

	/**
	 * [create new user]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	create(req, res) {
		console.log(req.body.f_name)
		let saveObj = {
			f_name: req.body.f_name,
			l_name: req.body.l_name,
			dob: req.body.dob,
			email: req.body.email,
			phone:req.body.phone,
			address:req.body.address,
			password:req.body.password
		}
		//let saveObj = req.body.userObj
		User.create(saveObj).then(createRes=> {
			console.log(`Success`)
			res.send(createRes)
		}).catch(err => {
			console.log(err)
			res.send(err)
		})
	}

	/**
	 * [save new user]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	save(req, res) {
		let saveObj = {
			f_name: req.body.f_name,
			l_name: req.body.l_name,
			email: req.body.email,
			phone: req.body.phone,
			age: req.body.age,
			address: {
				state: req.body.state,
				country: req.body.country
			}
		}
		let mod = new User(saveObj)
		mod.save((err,saveRes) => {
			if(err) {
				res.send(err)
				return
			}
			res.send(saveRes)
		})
	}

	/**
	 * [update user by id]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	update(req, res) {
		let query = {
			_id: mongoose.Types.ObjectId(req.params.id)
		}
		let updateObj = {
			f_name: req.body.f_name,
			l_name: req.body.l_name,
			email: req.body.email,
			phone: req.body.phone,
			age: req.body.age,
			address: {
				state: req.body.state,
				country: req.body.country
			}
		}
		let options = {
			// new: true
		}
		User.findOneAndUpdate(query, updateObj, options).then(updRes=> {
			res.send(updRes)
		}).catch(err => {
			res.send(err)
		})

		// User.update(query, updateObj, options).then(findRes=> {
		// 	res.send(updRes)
		// }).catch(err => {
		// 	res.send(err)
		// })
	}

	/**
	 * [delete user by id]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	delete(req, res) {
		let query = {
			_id: mongoose.Types.ObjectId(req.params.id)
		}
		User.remove(query).then(removeRes=> {
			res.send(removeRes)
		}).catch(err => {
			res.send(err)
		})
	}
}
module.exports = userController