var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  locationId:Number,
  locationName:String,
});

var location = mongoose.model('location', locationSchema, 'locationcrud');

router.get('/loc', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    location.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/loc/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     location.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/loc', function(req, res){
  console.log(req.body);
  var id = req.body.locationId;
  var name = req.body.locationName;
  var Location1 = new location({
    locationId:id,
    locationName:name,
  });

  Location1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Location added Saved Successfully");
    res.json(docs);
  });

  })
router.delete('/loc/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      location.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/loc/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    location.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
