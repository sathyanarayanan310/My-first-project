var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');

var showtimeSchema = mongoose.Schema({
  showtimeId:Number,
  showtimeTime:Number,
});

var showtime = mongoose.model('showtime', showtimeSchema, 'showtimecrud');

router.get('/show', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    showtime.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/show/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     showtime.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/show', function(req, res){
  console.log(req.body);
  var id = req.body.showtimeId;
  var time = req.body.showtimeTime;
  var Showtime1 = new Showtime({
    showtimeId:id,
    showtimeTime:time,
  });

  Showtime1.save(function(err, docs){
    if ( err ) throw err;
    console.log("showtime added Saved Successfully");
    res.json(docs);
  });

  })
router.delete('/show/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      showtime.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/show/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    showtime.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
