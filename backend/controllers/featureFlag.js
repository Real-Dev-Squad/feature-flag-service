const express = require('express');
const FeatureFlagModel = require('../models/FeatureFlag.js');
const router = express.Router();

/* POST (SAVE) Feature Flag */
router.post('/', (req,res) => {
    try{
        if(req.body !== undefined){
            const feature = new FeatureFlagModel(req.body);
            feature.save(); 
        }
    }
    catch(err){
        return "There is some issue please check your DATA"
    }
    
});

module.exports = router;
