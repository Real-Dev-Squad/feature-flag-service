const FeatureFlagModel = require('../models/FeatureFlag');

/* Create Feature Flag */
const createFeatureFlag = async (req, res) => { 
    try{
        if(req.body !== undefined){
            const feature = new FeatureFlagModel(req.body);
            feature.save(); 
            res.send();
        }
    }
    catch(err){
        res.send(err)
    }
}

module.exports = createFeatureFlag;
