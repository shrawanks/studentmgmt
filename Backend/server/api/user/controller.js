const mongoose = require('mongoose')
const User = mongoose.model('users')
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
const secret = 'AICT';

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
			res.status(200).send({status:'success',data:userRes})
			//res.send(userRes)
		}).catch(err => {
			res.status(200).send({status:'failed',data:err})
			//res.send(err)
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
			res.status(200).send({status:'success',data:findRes})
			//res.send(findRes)
		}).catch(err => {
			res.status(200).send({status:'failed',data:err})
			//res.send(err)
		})
	}

	/**
	 * [create new user]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	create(req, res) {
		const hash = crypto.createHmac('sha256', secret)
                   .update(req.body.password)
				   .digest('hex');
				   var token = jwt.sign({ email: req.body.email},secret,{ expiresIn: '24h' });		   
		let saveObj = {
			f_name: req.body.f_name,
			l_name: req.body.l_name,
			dob: req.body.dob,
			email: req.body.email,
			phone:req.body.phone,
			address:req.body.address,
			password:hash,
			gender:req.body.gender,
			type:1,
			classID:req.body.classID
			}
		//let saveObj = req.body.userObj
		User.create(saveObj).then(createRes=> {
			//console.log(`Success`)
			//res.send(createRes)
			res.status(200).send({status:'success',jwttoken:token,data:createRes})
		}).catch(err => {
			//console.log(err)
			//res.send(err)
			res.status(200).send({status:'failed',data:err})
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
			gender: req.body.gender,
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
			address:req.body.address,
			gender:req.body.gender
		}
		let options = {
			// new: true
		}
		User.findOneAndUpdate(query, updateObj, options).then(updRes=> {
			//res.send(updRes)
			res.status(200).send({status:'success',data:updRes})
		}).catch(err => {
			//res.send(err)
			res.status(200).send({status:'success',data:err})
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
			res.status(200).send({status:'success'})
			//res.send(removeRes)
		}).catch(err => {
			//res.send(err)
			res.status(200).send({status:'err'})
		})
	}
}
module.exports = userController