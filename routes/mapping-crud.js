var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');



var mappingSchema = mongoose.Schema({
  mappingMoviename:String,
  mappingLocation:String,
  mappingtheatername:String,
  mappingShowtiming:Array,
  mappingFromdate:Number,
  mappingTodate:Number,
  mappingTicketprice:Number,
});

var mapping = mongoose.model('Mapping', mappingSchema, 'mappingtable');

router.get('/map', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    mapping.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/map/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     mapping.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/map', function(req, res){
  console.log(req.body);
  var moviename = req.body.mappingMoviename;
  var theaterlocation = req.body.mappingtheaterlocation;
  var theatername = req.body.mappingTheatername;
  var showtiming = req.body.mappingShowtiming;
  var fromdate = req.body.mappingFromdate;
  var todate = req.body.mappingTodate;
  var ticketprice = req.body.mappingTicketprice;
  var mapping1 = new Mapping({
    mappingMovieName:moviename,
    mappingTheaterlocation:theaterlocation,
    mappingTheatername:theatername,
    mappingShowtiming:showtiming,
    mappingFromdate:fromdate,
    mappingTodate:todate,
    mappingTicketprice:ticketprice,
  });

  mapping1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Mapping Saved Successfully");
    res.json(docs);
  });

  })
router.delete('/map/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      mapping.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/map/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    mapping.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
