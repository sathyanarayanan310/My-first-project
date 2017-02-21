var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var RateSchema = mongoose.Schema({
  
ratehalf:Number,
rateFirst:Number,
rateFirsthalf:Number,
rateSecond:Number,
rateSecondhalf:Number,
rateThird:Number,
rateThirdhalf:Number,
rateFourth:Number,
rateFourthhalf:Number,
rateFifth:Number,
Total:Number,
comments:String

 });
var Rate = mongoose.model('Rate',RateSchema, 'rateTable');


router.get('/rtrv', function (req, res) {
    console.log("REACHED GET FUNCTION ON rating SERVER");
    Rate.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/rtrv/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON rating SERVER");
     Rate.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/rtrv', function(req, res){
  console.log(req.body);
  var rating05 = req.body.ratehalf;
  var rating1 = req.body.rateFirst;
  var rating15 = req.body.rateFirsthalf;
  var rating2 = req.body.rateSecond;
  var rating25 = req.body.rateSecondhalf;
  var rating3 = req.body.rateThird;
  var rating35 = req.body.rateThirdhalf;
  var rating4 = req.body.rateFourth;
  var rating45 = req.body.rateFourthhalf;
  var rating5 = req.body.rateFifth;
  var words = req.body.comments;
  var totalrating = req.body.Total;


var rate1 = new Book({
    rateHalf:rating05,
    rateFirst:rating1,
    rateFirsthalf:rating15,
    rateSecond:rating2,
    rateSecondhalf:rating25,
    rateThird:rating3,
    rateThirdhalf:rating35,
    rateFourth:rating4,
    rateFourthhalf:rating45,
    rateFifth:rating5,
    comments:words,
    Total:totalrating

});

  rate1.save(function(err, docs){
    if ( err ) throw err;
    console.log("rating Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/rtrv/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Rate.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/rtrv/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Rate.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
