const mongoose = require('mongoose')
const Subject = mongoose.model('subject')

class subjectController {
	constructor() {}

	/**
	 * [get all users]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	get(req, res) {
		Subject.find({}).then(userRes=> {
			//res.send(userRes)
			res.status(200).send({status:'success',data: userRes})
		}).catch(err => {
			//res.send(err)
			res.status(500).send({status:'failed',data:err})
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
		Subject.findOne(query, projection).lean().then(findRes=> {
			//res.send(findRes)
			res.status(200).send({status:'success',data: findRes})
		}).catch(err => {
			//res.send(err)
			res.status(500).send({status:'failed',data: err})
		})
	}

	/**
	 * [create new user]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	create(req, res) {
		console.log(req.body)
		let saveObj = {
			name: req.body.name,
			classId: req.body.classId,
			fullMark: req.body.fullMark,
			passmark: req.body.passmark
		}
		//let saveObj = req.body.userObj
		Subject.create(saveObj).then(createRes=> {
			//console.log(`Success`)
			res.status(200).send({status:'success',data: createRes})
			//res.send(createRes)
		}).catch(err => {
			//console.log(err)
		//	res.send(err)
		res.status(500).send({status:'failed',data: err})
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
			name: req.body.name,
			classId: req.body.classId,
			fullMark: req.body.fullMark,
			passmark: req.body.passmark
		}
		let mod = new Subject(saveObj)
		mod.save((err,saveRes) => {
			if(err) {
				//res.send(err)
				res.status(500).send({status:'success',data: err})
				return
			}
			//res.send(saveRes)
			res.status(200).send({status:'success',data: saveRes})
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
			name: req.body.name,
			classId: req.body.classId,
			fullMark: req.body.fullMark,
			passmark: req.body.passmark
		}
		let options = {
			// new: true
		}
		Subject.findOneAndUpdate(query, updateObj, options).then(updRes=> {
			res.status(200).send({status:'success',data: updRes})
			//res.send(updRes)
		}).catch(err => {
			res.status(200).send({status:'success',data: err})
			//res.send(err)
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
		Subject.remove(query).then(removeRes=> {
			res.status(200).send({status:'success' })
			// res.send(removeRes)
			// res.send({ status: '1' });
			}).catch(err => {
				res.send({ status: 'failed' });
		})
	}

	get(req, res) {
		let query = {
			_id: mongoose.Types.ObjectId(req.params.classId)
		}
		// let query = {
		// 	email: req.params.email
		// }
		let projection = {
			// f_name: 1
		}
		Subject.find(query, projection).lean().then(findRes=> {
			//res.send(findRes)
			res.status(200).send({status:'success',data: findRes})
		}).catch(err => {
			//res.send(err)
			res.status(500).send({status:'failed',data: err})
		})
	}

	getClass(req, res) {
		let query = {
			_id: mongoose.Types.ObjectId(req.params.classId)
		}
		// let query = {
		// 	email: req.params.email
		// }
		let projection = {
			// f_name: 1
		}
		Subject.find(query, projection).lean().then(findRes=> {
			//res.send(findRes)
			res.status(200).send({status:'success',data: findRes})
		}).catch(err => {
			//res.send(err)
			res.status(500).send({status:'failed',data: err})
		})
	}

}
module.exports = subjectController