var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));




var movieSchema = mongoose.Schema({
  movieName:String,
  movieLanguage:String,
  movieRuntime:String,
  movieYear:Number,
  movieGenre:String,
  moviePlot:String,
  moviePoster:String,
});

var Movie = mongoose.model('Movie', movieSchema, 'movietable');

// router.get('/get', function (req, res, next) {
//
//     console.log("REACHED  GET omdb FUNCTION ON SERVER");
//     Movie.find({}, function (err, docs)
//     {
//          res.json(docs);
//          console.log(docs);
//
//     });
// });

router.get('/getdata', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getdata/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/add', function(req, res){
  console.log(req.body);
  //
  // var name = req.body.Name;
  // var languague = req.body.Language;
  // var runtime = req.body.movieRuntime;
  // var year = req.body.movieYear;
  // var genre = req.body.movieGenre;
  // var plot = req.body.moviePlot;
  // var poster = req.body.moviePoster;
  var title = req.body.Title;
  var language = req.body.Language;
  var rt = req.body.Runtime;
  var yr = req.body.Year;
  var genre = req.body.Genre;
  var plot = req.body.Plot;
  var poster = req.body.Poster;
  var movie1 = new Movie({
    movieName:name,
    movieLanguage:language,
    movieRuntime:duration,
    movieYear:year,
    movieGenre:genre,
    moviePlot:plot,
    moviePoster:poster
  });

  movie1.save(function(err, docs){
    if ( err ) throw err;
    console.log("movie Saved Successfully");
    res.json(docs);
  });
  })

router.delete('/del/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/update/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
console.log(data);
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
