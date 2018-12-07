const express = require('express');

const router = express.Router();
var fs = require('fs');

router.get('/:id', (req, res, next) => {

	var obj;
	fs.readFile('./db/products.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		let filtered = Object.keys(obj.lists).filter(key => key == req.params.id - 1);
		let result = filtered.reduce((r, k) => r.concat(obj.lists[k]), []);
		res.render('details', {
			title: 'Sản phẩm',
			data: result[0]
		});
		//  res.json(items); // Dòng này chỉ bật khi viết API
	});
});

module.exports = router;
