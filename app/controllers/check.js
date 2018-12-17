const express = require('express');

const router = express.Router();
var fs = require('fs');
var md5 = require('md5');


router.post('/', (req, res, next) => {

	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', "Content-Type");

	var obj;
	fs.readFile('./db/users.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		let pass = md5(req.body.password)
		let user = req.body.username.toLowerCase().trim()
		let msg = 0
		let datatmp = {
			user: null,
			email: null,
			fullname: null
		}
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let element = obj[key];
				if(element.username === user) {
					if(element.password === pass) {
						msg=1
						datatmp.user = element.username
						datatmp.email = element.email
						datatmp.fullname = element.fullname
						break
					} else {
						msg=2
						break
					}
				} else {
					msg=3
					break
				}
			}
		}
		if(msg == 1)
			res.json({
				status: true,
				msg: "Success",
				data: datatmp
			})
		else 
			res.json({
				status: false,
				err: 404,
				msg: "Error"
			})
	});
});

module.exports = router;
