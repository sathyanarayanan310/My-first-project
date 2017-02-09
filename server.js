
var logger = require('morgan');
var express = require('express');
var app = express();
// var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
// var methodOverride = require('method-override');

var routes = require('./routes/movie-crud');
var routesCity = require('./routes/city-crud');
var routesTheater = require('./routes/theater-crud');
var routesShow = require('./routes/showtime-crud');
var routesMapping = require('./routes/mapping-crud');

// var bodyParser=require('body-parser');

// var path = require('path');
// var cookieParser = require('cookie-parser');
// var expressValidator = require('express-validator');
// var flash = require('connect-flash');
// var session = require('express-session')
// var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({}));

app.use('/movie', routes);
app.use('/cty', routesCity);
app.use('/theater', routesTheater);
app.use('/showt', routesShow);
app.use('/map', routesMapping);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});
//Database
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));




// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// app.use(function(err, req, res) {
//   res.status(err.status || 500);
//   res.end(JSON.stringify({
//     message: err.message,
//     error: {}
//   }));
// });

var server = app.listen(4151, function () {
  console.log('listening on port 4151');
});
