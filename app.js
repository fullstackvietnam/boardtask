var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
// Gọi Route
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
// Khởi tạo APP
var app = express();
// Gọi Template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Cấu hình
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(sassMiddleware({
	src: __dirname + '/styles',
	dest: __dirname + '/public',
	debug: true,
	outputStyle: 'expanded',
	indentedSyntax: true, // true = .sass and false = .scss
	sourceMap: app.get('env') === 'development' ? false : true,
	// log: function (severity, key, value) {
	// 	winston.log(severity, 'node-saas-middleware   %s : %s', key, value);
	// }
}));

app.use(express.static(path.join(__dirname, 'public')));
// Init App
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	if (req.app.get('env') === 'dev') {
		next(createError(404));
	} else {
		res.status(400);
		res.render('404.pug', {
			title: "404 We're sorry!",
			desc: "We couldn't find what you're looking for",
			btn: "» Go back to the main page"
		});
	}
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'dev' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
