const express = require('express');
const FeatureFlagModel = require('../models/FeatureFlag.js');
const router = express.Router();

// Save the data in the DB
router.post('/', (req,res) => {
    const feature = new FeatureFlagModel(req.body);
    feature.save(); 
});

module.exports = router;
