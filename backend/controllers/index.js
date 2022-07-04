const express = require('express');
const FeatureFlagModel = require('../models/FeatureFlag.js');
const router = express.Router();

/* GET Feature Flags */
router.get('/', function(req, res) {
  try{
    FeatureFlagModel.find({}, function(err, flags) {
      res.json(flags);
   });
  }
  catch(err){
    return "There is some issue"
  }
});

module.exports = router;
