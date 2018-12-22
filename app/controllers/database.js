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

	con.connect(function () {
		console.log("Connected!");
		var sql = "SELECT * FROM `customers` ORDER BY id";
		// var sql = "INSERT INTO `customers`(`id`, `name`, `address`) VALUES (null,'111111','454353453453')";
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
