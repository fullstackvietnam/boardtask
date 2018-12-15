const express = require('express');

const router = express.Router();
var fs = require('fs');
var md5 = require('md5');

router.post('/', (req, res, next) => {

	var obj;
	fs.readFile('./db/users.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		let pass = md5(req.body.password)
		let user = req.body.username.toLowerCase().trim()
		let msg = 0
		
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let element = obj[key];
				if(element.username === user) {
					if(element.password === pass) {
						msg=1
					} else {
						msg=2
					}
				} else {
					msg=3
				}
			}
		}
		if(msg == 1)
			res.redirect('/')
		else 
			res.redirect('/error')
		
	});
});

module.exports = router;
