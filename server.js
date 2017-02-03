
// var logger = require('morgan');
var express = require('express');
var app = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
// var methodOverride = require('method-override');

var routes = require('./routes/movie-crud');
var routes1 = require('./routes/theater-crud');
var routes2 = require('./routes/mapping-crud');
var routes3 = require('./routes/showtime-crud');
var routes4 = require('./routes/location-crud');

// var bodyParser=require('body-parser');

var path = require('path');
// var cookieParser = require('cookie-parser');
// var expressValidator = require('express-validator');
// var flash = require('connect-flash');
// var session = require('express-session')
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({}));

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});
app.use('/m', routes);
app.use('/the',routes1);
app.use('/map',routes2);
app.use('/show',routes3);
app.use('/loc',routes4);

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
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
