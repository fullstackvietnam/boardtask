const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

	res.render('login', {
		title: 'Đăng nhập'
	});
});

module.exports = router;
