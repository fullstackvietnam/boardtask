/* eslint-disable global-require, func-names */

module.exports = function (app) {
	app.use('/api/v1', require('./apis'));
	// Trang chủ
	app.use('/', require('./controllers/home'));
	// Trang DS SP
	app.use('/login', require('./controllers/login'));
	app.use('/check', require('./controllers/check'));
	app.use('/products', require('./controllers/products'));
	// Trang SP Chi tiết
	app.use('/details', require('./controllers/products-details'));
};
