const express = require('express');

const router = express.Router();
const Utils = require('../helpers/utils');

router.get('/', (req, res, next) => {
	const name = Utils.randomString(5);
	console.log(name);

	res.render('index', {
		title: 'Khoai To'
	});
});

module.exports = router;
