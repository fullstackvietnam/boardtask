const express = require('express');

const router = express.Router();

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "test"
});

router.get('/', (req, res, next) => {

	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "SELECT * FROM `customers` WHERE name='Nguyen' ORDER BY id";
		// var sql = "INSERT INTO `customers`(`id`, `name`, `address`) VALUES (null,'dsf dsfdsfsd','cg  sdgdsgds fsdf')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.render('database', {
				title: 'Users',
				data: result
			});
		});
	});

});

module.exports = router;
