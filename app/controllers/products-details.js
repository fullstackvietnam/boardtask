const express = require('express');

const router = express.Router();
var fs = require('fs');

router.get('/:id', (req, res, next) => {

	var obj;
	fs.readFile('./db/products.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		var filtered = obj.lists.filter(function(e) {
			return e.id == req.params.id;
		  });
		res.render('details', {
			title: 'Sản phẩm',
			data: filtered[0]
		});
	});
});

module.exports = router;
