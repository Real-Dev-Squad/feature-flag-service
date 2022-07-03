const express = require('express');
const FeatureFlagModel = require('../models/FeatureFlag.js');
const router = express.Router();

/* GET FeatureFlags */
router.get('/', function(req, res, next) {
  FeatureFlagModel.find({}, function(err, flags) {
    res.json(flags);
 });
});

module.exports = router;
