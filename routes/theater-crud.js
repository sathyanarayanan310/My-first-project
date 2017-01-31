var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');



var theaterSchema = mongoose.Schema({
  theaterId:Number,
  theaterName:String,
  theaterLocation:String,
  theaterSeatingcapacity:Number,
  theaterShowtiming:Array,
});

var theater = mongoose.model('theater', theaterSchema, 'theatercrud');

router.get('/the', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    theater.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/the/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     theater.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/the', function(req, res){
  console.log(req.body);
  var id = req.body.theaterId;
  var name = req.body.theaterName;
  var location = req.body.theaterLocation;
  var seatingcapacity= req.body.theaterSeatingcapacity;
  var showtiming = req.body.theaterShowtiming;
  var Theater1 = new Theater({
    theaterId:id,
    theaterName:name,
    theaterLocation:location,
    theaterSeatingcapacity:seatingcapacity,
    theaterShowtiming:showtiming,
  });

  Theater1.save(function(err, docs){
    if ( err ) throw err;
    console.log("theater added Saved Successfully");
    res.json(docs);
  });

  })
router.delete('/the/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      theater.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/the/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    theater.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
