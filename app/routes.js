/* eslint-disable global-require, func-names */

module.exports = function (app) {
	// Trang chủ
	app.use('/', require('./controllers/home'));
	// APIs
	app.use('/api/v1', require('./apis'));
	// Trang check
	app.use('/login', require('./controllers/login'));
	app.use('/check', require('./controllers/check'));
	// Trang SP Chi tiết
	app.use('/products', require('./controllers/products'));
	app.use('/detail', require('./controllers/products-details'));
	app.use('/database', require('./controllers/database'));
};
